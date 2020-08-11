import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddReviewPage } from './add-review.page';
const routes = [
    {
        path: '',
        component: AddReviewPage
    }
];
let AddReviewPageRoutingModule = class AddReviewPageRoutingModule {
};
AddReviewPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AddReviewPageRoutingModule);
export { AddReviewPageRoutingModule };
//# sourceMappingURL=add-review-routing.module.js.map