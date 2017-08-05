import { TemplateRef } from "@angular/core";

export interface LayoutOptions {
    headerTemplate: TemplateRef<any>;
    layoutType: string;
}

export const LayoutType = Object.freeze({
    GOLDEN      : 'GOLDEN',
    GRIDSTER    : 'GRIDSTER',
    TAB         : 'TAB',
    VANILLA     : 'VANILLA'
});