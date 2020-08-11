import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AngularFirestore } from '@angular/fire/firestore';
let ComparePage = class ComparePage {
    constructor(productService, db) {
        this.productService = productService;
        this.db = db;
    }
    ngOnInit() {
        this.products = this.productService.getProducts();
        this.db.collection('products').valueChanges()
            .subscribe(prodData => {
            this.productData = prodData;
            this.loadedProductData = prodData;
            console.log("Product Get");
        });
    }
    initializeItems() {
        this.productData = this.loadedProductData;
    }
    productone(evt) {
        const searchTerm = evt.srcElement.value;
        this.initializeItems();
        if (!searchTerm) {
            return;
        }
        this.productData = this.productData.filter(product => {
            if (product.name && searchTerm) {
                if (product.name.toLowerCase()
                    .indexOf(searchTerm.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    }
};
ComparePage = tslib_1.__decorate([
    Component({
        selector: 'app-compare',
        templateUrl: './compare.page.html',
        styleUrls: ['./compare.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ProductService,
        AngularFirestore])
], ComparePage);
export { ComparePage };
//# sourceMappingURL=compare.page.js.map