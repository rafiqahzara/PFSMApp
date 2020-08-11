import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewService } from '../services/review.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
let ProductDisplayPage = class ProductDisplayPage {
    constructor(productService, activatedRoute, reviewService, toastCtrl, db, router) {
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.reviewService = reviewService;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.router = router;
        this.products = {
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
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.productService.getProduct(id)
                .subscribe(products => {
                this.products = products;
                //this.productService.updateDocID;
                //return this.goToAddReview(id);
            });
        }
    }
};
ProductDisplayPage = tslib_1.__decorate([
    Component({
        selector: 'app-product-display',
        templateUrl: './product-display.page.html',
        styleUrls: ['./product-display.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ProductService,
        ActivatedRoute,
        ReviewService,
        ToastController,
        AngularFirestore,
        Router])
], ProductDisplayPage);
export { ProductDisplayPage };
//# sourceMappingURL=product-display.page.js.map