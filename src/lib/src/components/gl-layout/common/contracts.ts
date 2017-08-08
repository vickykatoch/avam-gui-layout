import * as GoldenLayout from 'golden-layout';
import { Type } from "@angular/core";
import { LayoutItemConfig } from "./model";

export interface GlOnResize {
    glOnResize() : void;
}
export interface GlOnShow {
    glOnShow() : void;
}
export interface GlOnHide {
    glOnHide() : void;
}


export interface ComponentInitCallback extends Function {
    (container: GoldenLayout.Container, componentState: any) : void;
}

export interface ComponentInitCallbackFactory {
    createComponentInitCallback(component : Type<any>) : ComponentInitCallback;
    saveState() : any;
}

export interface ILayoutItem {
    id : string;
    getState() : LayoutItemConfig;
    setState(state: LayoutItemConfig) : void;
    dispose() : void;
}

export interface LayoutComponentState {
    layout : any;
    components : {[key: string] : LayoutItemConfig};
}