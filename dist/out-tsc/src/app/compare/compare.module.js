import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComparePageRoutingModule } from './compare-routing.module';
import { ComparePage } from './compare.page';
let ComparePageModule = class ComparePageModule {
};
ComparePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ComparePageRoutingModule
        ],
        declarations: [ComparePage]
    })
], ComparePageModule);
export { ComparePageModule };
//# sourceMappingURL=compare.module.js.map