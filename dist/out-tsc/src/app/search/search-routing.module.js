import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchPage } from './search.page';
const routes = [
    {
        path: '',
        component: SearchPage
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SearchPageRoutingModule);
export { SearchPageRoutingModule };
//# sourceMappingURL=search-routing.module.js.map