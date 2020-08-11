import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReviewsPageRoutingModule } from './reviews-routing.module';
import { ReviewsPage } from './reviews.page';
let ReviewsPageModule = class ReviewsPageModule {
};
ReviewsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ReviewsPageRoutingModule
        ],
        declarations: [ReviewsPage]
    })
], ReviewsPageModule);
export { ReviewsPageModule };
//# sourceMappingURL=reviews.module.js.map