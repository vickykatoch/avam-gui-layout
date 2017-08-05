import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { 
  AvamGuiLayoutComponent, 
  LayoutHeaderComponent,
  LayoutBodyComponent,
  LayoutFooterComponent,
  AvamLayoutService,
  GoldenContentLayoutComponent,
  GridsterContentLayoutComponent,
  VanillaContentLayoutComponent
} from "./index";


@NgModule({
  imports : [
    CommonModule
  ],
  declarations: [
    AvamGuiLayoutComponent,
    LayoutHeaderComponent,
    LayoutBodyComponent,
    LayoutFooterComponent,
    GoldenContentLayoutComponent,
    GridsterContentLayoutComponent,
    VanillaContentLayoutComponent
  ],
  providers: [
    AvamLayoutService
  ],
  exports: [
    AvamGuiLayoutComponent
  ]
})
export class AVAMGuiLayoutModule { }
