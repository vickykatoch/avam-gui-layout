import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  NgZone,
  Injector,
  Type,
  ReflectiveInjector,
  HostListener
} from '@angular/core';
import * as GoldenLayout from 'golden-layout';
import {
  ILayoutItem,
  ComponentInitCallbackFactory,
  ComponentInitCallback,
  isLayoutItem,
  LayoutComponentState,
  GoldenLayoutContainer,
  GoldenLayoutComponentState,
  isOnResizeImplemented,
  isOnShowImplemented,
  isOnHideImplemented
} from "./common/index";
import { AvamGoldenContentLayoutService } from "./services/golden-layout.service";
import 'rxjs/add/operator/filter';

const COMPONENT_REF_KEY = '$componentRef';


@Component({
  selector: 'gl-content-layout',
  template: `<div class='gl-layout' #glRoot>`,
  styles: [`
    .gl-layout {
      height : 100%;
      width : 100%;
    }
  `]
})
export class AvamGoldenContentLayoutComponent implements OnInit, ComponentInitCallbackFactory {

  private goldenLayout: GoldenLayout;
  @ViewChild('glRoot') private el: ElementRef;
  private containedComponents: { [key: string]: ILayoutItem } = {};


  constructor(private contentLayoutService: AvamGoldenContentLayoutService,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private ngZone: NgZone,
    private readonly injector: Injector) {
  }

  ngOnInit() {
    this.contentLayoutService.layoutState$.filter(x => x !== null).subscribe((layout: any) => {
      this.createLayout(layout);
    });
  }

  createComponentInitCallback(componentType: Type<any>): ComponentInitCallback {
    return (container : GoldenLayout.Container, componentState : any) => {
      this.ngZone.run(()=> {
        const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        const injector = this.createComponentInjector(container, componentState);
        const componentRef = this.viewContainer.createComponent(factory,undefined,injector);
        const componentInstance : ILayoutItem = <ILayoutItem>componentRef.instance;
        if(!isLayoutItem(componentInstance)) {
          throw new Error('Invalid component type. Component must implement ILayoutItem interface');
        }
        this.containedComponents[componentInstance.id] = componentInstance;
        container.getElement().append($(componentRef.location.nativeElement));
        this.bindEventHooks(container,componentInstance);
        (container as any)[COMPONENT_REF_KEY] = componentRef;
      });
    };
  }
  saveState() {
    const state = <LayoutComponentState> {
      layout : this.goldenLayout.toConfig(),
      components : {}
    };
    Object.keys(this.containedComponents).forEach(key=> {
      state.components[key] = this.containedComponents[key].getState();
    });
    return state;
  }

  private createLayout(layout: any) : void {
    this.containedComponents = {};
    this.goldenLayout = new GoldenLayout(layout,$(this.el.nativeElement));
    this.goldenLayout.on('itemDestroyed', (item: any)=> {
      const container = item.container;
      const component = container && container[COMPONENT_REF_KEY];
      if(component) {
        component.destroy();
        const layoutItem = <ILayoutItem>component.instance;
        this.containedComponents[layoutItem.id];
        layoutItem.dispose();
        (container as any)[COMPONENT_REF_KEY] = null;
      }
    });
    this.contentLayoutService.initialize(this.goldenLayout, this);
    this.goldenLayout.init();
  }
  private createComponentInjector(container: GoldenLayout.Container, componentState: any) : Injector {
    return ReflectiveInjector.resolveAndCreate([{
      provide : GoldenLayoutContainer,
      useValue : container
    },{
      provide : GoldenLayoutComponentState,
      useValue : componentState
    },{
      provide : GoldenLayout,
      useValue : this.goldenLayout
    }], this.injector);
  }
  private bindEventHooks(container: GoldenLayout.Container, component: any) : void {
    if(isOnResizeImplemented(component)) {
      container.on('show',()=> { component.glOnResize() });
    }
    if(isOnShowImplemented(component)) {
      container.on('show',()=> { component.glOnShow() });
    }
    if(isOnHideImplemented(component)) {
      container.on('show',()=> { component.glOnHide() });
    }
  }

  @HostListener('window:resize',['$event'])
  private onResize(evt: any) : void {
    if(this.goldenLayout) {
      this.goldenLayout.updateSize();
    }
  }
}
