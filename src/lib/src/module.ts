import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { 
  AvamGuiLayoutComponent, 
  LayoutHeaderComponent,
  LayoutBodyComponent,
  LayoutFooterComponent,
  AvamLayoutService
} from "./index";


@NgModule({
  imports : [
    CommonModule
  ],
  declarations: [
    AvamGuiLayoutComponent,
    LayoutHeaderComponent,
    LayoutBodyComponent,
    LayoutFooterComponent
  ],
  providers: [
    AvamLayoutService
  ],
  exports: [
    AvamGuiLayoutComponent
  ]
})
export class AVAMGuiLayoutModule { }
