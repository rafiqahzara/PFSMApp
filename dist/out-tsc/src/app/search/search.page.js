import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
let SearchPage = class SearchPage {
    constructor(productService, router, db, activatedRoute) {
        this.productService = productService;
        this.router = router;
        this.db = db;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        //this.products = this.productService.getProducts();
        this.db.collection('products').valueChanges()
            .subscribe(prodData => {
            this.productData = prodData;
            this.loadedProductData = prodData;
            console.log("Product Get", this.productData);
        });
        const events = firebase.firestore().collection('products');
        events.get().then((querySnapshot) => {
            this.prodId = [];
            querySnapshot.forEach((doc) => {
                this.prodId.push(Object.assign({ id: doc.id }, doc.data()));
            });
            console.log("Product ID", this.prodId);
        });
    }
    /*getAllDocs() {
     this.db.collection('products').valueChanges({idField: 'prodId'})
     .subscribe( prodID => {
       this.prodId = prodID;
       console.log("Product Get", this.prodId);
     });
   }*/
    initializeItems() {
        this.productData = this.loadedProductData;
    }
    filterList(evt) {
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
SearchPage = tslib_1.__decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.page.html',
        styleUrls: ['./search.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ProductService,
        Router,
        AngularFirestore,
        ActivatedRoute])
], SearchPage);
export { SearchPage };
//# sourceMappingURL=search.page.js.map