import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductDisplayPageRoutingModule } from './product-display-routing.module';
import { ProductDisplayPage } from './product-display.page';
let ProductDisplayPageModule = class ProductDisplayPageModule {
};
ProductDisplayPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ProductDisplayPageRoutingModule
        ],
        declarations: [ProductDisplayPage]
    })
], ProductDisplayPageModule);
export { ProductDisplayPageModule };
//# sourceMappingURL=product-display.module.js.map