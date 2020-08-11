import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductService } from '../services/product.service';
import { ReviewService } from '../services/review.service';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { ProfileService } from './../services/profile.service';
let AddReviewPage = class AddReviewPage {
    constructor(productService, activatedRoute, reviewService, toastCtrl, router, authService, profileService, db) {
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.reviewService = reviewService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.authService = authService;
        this.profileService = profileService;
        this.db = db;
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
        this.reviews = {
            prodId: "",
            reviewTitle: "",
            rating: undefined,
            reviewContent: "",
            addedAt: new Date().getTime(),
            email: "",
            profid: ""
        };
        this.profile = {
            name: "",
            age: undefined,
            skintype: "",
            skinconcern: "",
            profid: ""
        };
        if (this.authService.getCurrentUser()) {
            this.reviews.email = this.authService.getCurrentUser().email;
            this.uid = this.authService.getCurrentUser().uid;
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    ngOnInit() {
        //this.reviews.userid = this.authService.getCurrentUser().uid;
        this.reviews.prodId = this.activatedRoute.snapshot.paramMap.get('id');
    }
    ionViewWillEnter() {
        const prodId = this.activatedRoute.snapshot.paramMap.get('id');
        if (prodId) {
            this.productService.getProduct(prodId)
                .subscribe(pro => {
                this.products = pro;
                this.reviewService.getReview(this.reviews.prodId)
                    .subscribe(rev => {
                    this.reviews = rev;
                    this.profileService.getProfile(this.uid)
                        .subscribe(prof => {
                        this.profile = prof;
                    });
                });
            });
            console.log("Proid");
        }
    }
    addReview() {
        this.reviews.addedAt = new Date().getTime();
        this.reviewService.addReview(this.reviews).then(() => {
            this.router.navigateByUrl('/reviews');
            this.showToast('review added');
        }, err => {
            this.showToast('There was a some problem in adding your review :(');
        });
    }
    showToast(msg) {
        this.toastCtrl.create({
            message: msg,
            duration: 2000
        }).then(toast => toast.present());
    }
};
AddReviewPage = tslib_1.__decorate([
    Component({
        selector: 'app-add-review',
        templateUrl: './add-review.page.html',
        styleUrls: ['./add-review.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ProductService,
        ActivatedRoute,
        ReviewService,
        ToastController,
        Router,
        AuthenticationService,
        ProfileService,
        AngularFirestore])
], AddReviewPage);
export { AddReviewPage };
//# sourceMappingURL=add-review.page.js.map