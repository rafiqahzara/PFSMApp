import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDisplayPage } from './product-display.page';
const routes = [
    {
        path: '',
        component: ProductDisplayPage
    }
];
let ProductDisplayPageRoutingModule = class ProductDisplayPageRoutingModule {
};
ProductDisplayPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ProductDisplayPageRoutingModule);
export { ProductDisplayPageRoutingModule };
//# sourceMappingURL=product-display-routing.module.js.map