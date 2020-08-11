import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
let ReviewService = class ReviewService {
    //prodID: Observable<Product[]>;
    constructor(db, activatedRoute, productService) {
        this.db = db;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.reviewCollection = this.db.collection('reviews');
        this.reviews = this.reviewCollection.snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const prodId = a.payload.doc.id;
                return Object.assign({ prodId }, data);
            });
        }));
    }
    addReview(review) {
        return this.reviewCollection.add(review);
    }
    getReview(id) {
        return this.reviewCollection.doc(id).valueChanges()
            .pipe(take(1), map(rev => {
            rev.id = id;
            return rev;
        }));
    }
    getReviews() {
        return this.reviews;
    }
};
ReviewService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore,
        ActivatedRoute,
        ProductService])
], ReviewService);
export { ReviewService };
//# sourceMappingURL=review.service.js.map