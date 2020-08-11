import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComparePage } from './compare.page';
const routes = [
    {
        path: '',
        component: ComparePage
    }
];
let ComparePageRoutingModule = class ComparePageRoutingModule {
};
ComparePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ComparePageRoutingModule);
export { ComparePageRoutingModule };
//# sourceMappingURL=compare-routing.module.js.map