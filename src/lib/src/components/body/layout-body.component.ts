import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { LayoutType } from "../../models/index";

@Component({
  selector: 'layout-body',
  templateUrl: './layout-body.component.html',
  styleUrls: ['./layout-body.component.css']
})
export class LayoutBodyComponent {
  
    @Input()
    layoutType : string = LayoutType.VANILLA;

    @ViewChild('glLayout') glLayout : TemplateRef<any>;
    @ViewChild('gsLayout') gsLayout : TemplateRef<any>;
    @ViewChild('vnLayout') vnLayout : TemplateRef<any>;
    // @ViewChild('glLayout') tabLayout : TemplateRef<any>;


    getLayoutTemplate() : any {
      switch(this.layoutType) {
        case LayoutType.VANILLA:
          return this.vnLayout;
        case LayoutType.GOLDEN:
          return this.glLayout;
        case LayoutType.GRIDSTER:
          return this.gsLayout;
        case LayoutType.TAB:
          // return this.tabLayout;
        default:
          return this.vnLayout;
      }
    }
}
