import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from "@angular/common";
import { 
  AvamGoldenContentLayoutModule, 
  DefaultGoldenLayoutConfig,
  LayoutHeaderComponent,
  LayoutBodyComponent,
  LayoutFooterComponent,
  AvamLayoutService,
  GridsterContentLayoutComponent,
  VanillaContentLayoutComponent
} from "./index";


@NgModule({
  imports : [
    CommonModule,
    AvamGoldenContentLayoutModule.forRoot(DefaultGoldenLayoutConfig),
  ],
  declarations: [
    LayoutHeaderComponent,
    LayoutBodyComponent,
    LayoutFooterComponent,
    GridsterContentLayoutComponent,
    VanillaContentLayoutComponent
  ],
  providers: [
    AvamLayoutService
  ],
  exports: [
  ]
})
export class AVAMGuiLayoutModule { 
    
}
