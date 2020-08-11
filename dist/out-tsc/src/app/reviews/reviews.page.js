import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductService } from '../services/product.service';
import { ReviewService } from '../services/review.service';
import { ProfileService } from './../services/profile.service';
import { ActivatedRoute } from '@angular/router';
//import { User, AuthenticationService } from '../services/authentication.service';
let ReviewsPage = class ReviewsPage {
    constructor(productService, reviewService, activatedRoute, db, profileService) {
        this.productService = productService;
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        this.db = db;
        this.profileService = profileService;
        // private user: Observable<User[]>;
        this.rev = {
            prodId: "",
            reviewTitle: "",
            rating: undefined,
            reviewContent: "",
            addedAt: new Date().getTime(),
            email: "",
            profid: ""
        };
    }
    ngOnInit() {
        //this.useremail = this.authService.getCurrentUser().email;
        //this.uid = this.authService.getCurrentUser().uid;
        this.profiles = this.profileService.getProfiles();
        this.products = this.productService.getProducts();
        this.reviews = this.reviewService.getReviews();
    }
};
ReviewsPage = tslib_1.__decorate([
    Component({
        selector: 'app-reviews',
        templateUrl: './reviews.page.html',
        styleUrls: ['./reviews.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ProductService,
        ReviewService,
        ActivatedRoute,
        AngularFirestore,
        ProfileService])
], ReviewsPage);
export { ReviewsPage };
//# sourceMappingURL=reviews.page.js.map