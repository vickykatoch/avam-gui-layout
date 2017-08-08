import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { AvamGoldenContentLayoutComponent } from "./golden-layout.component";
import { AvamGoldenContentLayoutService } from './services/golden-layout.service';
import { GoldenLayoutConfiguration } from './common/index';
export * from './common/index';
export * from './services/golden-layout.service';


@NgModule({
    imports : [
        CommonModule
    ],
    declarations : [
        AvamGoldenContentLayoutComponent
    ],
    exports : [
        AvamGoldenContentLayoutComponent
    ]
})
export class AvamGoldenContentLayoutModule {
    public static forRoot(config: GoldenLayoutConfiguration) : ModuleWithProviders {
        return {
            ngModule : AvamGoldenContentLayoutModule,
            providers : [
                AvamGoldenContentLayoutService
            ]
        };
    }
}