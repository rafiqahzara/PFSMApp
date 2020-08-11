import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AngularFirestore } from '@angular/fire/firestore';
let FilterPage = class FilterPage {
    constructor(db, productService) {
        this.db = db;
        this.productService = productService;
        this.pro = {
            prodId: "",
            type: "",
            name: "",
            subname: "",
            price: undefined,
            size: undefined,
            skintype: [""],
            skinconcern: [""],
            urlpage: "",
            Brightening: [""],
            AntiAging: [""],
            PWH: [""],
            AcneFighting: [""],
            allIngredient: [""],
        };
    }
    ngOnInit() {
        this.products = this.productService.getProducts();
    }
    pickProductType(type) {
        return this.db.collection('products', ref => ref.where('type', '==', type)).snapshotChanges();
    }
    pickSkinType(skintype) {
        return this.db.collection('products', ref => ref.where('skintype', 'array-contains-any', skintype)).snapshotChanges();
    }
};
FilterPage = tslib_1.__decorate([
    Component({
        selector: 'app-filter',
        templateUrl: './filter.page.html',
        styleUrls: ['./filter.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore,
        ProductService])
], FilterPage);
export { FilterPage };
//# sourceMappingURL=filter.page.js.map