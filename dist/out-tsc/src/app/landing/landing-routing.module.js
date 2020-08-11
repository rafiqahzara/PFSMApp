import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPage } from './landing.page';
const routes = [
    {
        path: '',
        component: LandingPage
    }
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LandingPageRoutingModule);
export { LandingPageRoutingModule };
//# sourceMappingURL=landing-routing.module.js.map