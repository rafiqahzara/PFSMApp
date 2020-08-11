import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddReviewPageRoutingModule } from './add-review-routing.module';
import { AddReviewPage } from './add-review.page';
let AddReviewPageModule = class AddReviewPageModule {
};
AddReviewPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AddReviewPageRoutingModule
        ],
        declarations: [AddReviewPage]
    })
], AddReviewPageModule);
export { AddReviewPageModule };
//# sourceMappingURL=add-review.module.js.map