import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LandingPageRoutingModule } from './landing-routing.module';
import { LandingPage } from './landing.page';
let LandingPageModule = class LandingPageModule {
};
LandingPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            LandingPageRoutingModule
        ],
        declarations: [LandingPage]
    })
], LandingPageModule);
export { LandingPageModule };
//# sourceMappingURL=landing.module.js.map