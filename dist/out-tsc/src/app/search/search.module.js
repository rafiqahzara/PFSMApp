import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';
let SearchPageModule = class SearchPageModule {
};
SearchPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SearchPageRoutingModule
        ],
        declarations: [SearchPage]
    })
], SearchPageModule);
export { SearchPageModule };
//# sourceMappingURL=search.module.js.map