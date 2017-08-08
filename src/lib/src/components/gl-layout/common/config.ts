import { Type } from "@angular/core";
import * as GoldenLayout from 'golden-layout';

export interface ComponentConfiguration {
    componentName           : string;
    component               : Type<any>;
}

export interface GoldenLayoutConfiguration {
    components              : ComponentConfiguration[];
    defaultLayout           : GoldenLayout.Config;
}