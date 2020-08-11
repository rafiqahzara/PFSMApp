import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import { Product, ProductService} from '../services/product.service';
import { map, take } from 'rxjs/operators';
let IngredientsService = class IngredientsService {
    constructor(db) {
        this.db = db;
        this.ingredientCollection = db.collection('products').doc('prodId')
            .collection('ingredients');
        this.ingredients = this.ingredientCollection.snapshotChanges().pipe(take(1), map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    getIngredients() {
        return this.ingredients;
    }
};
IngredientsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], IngredientsService);
export { IngredientsService };
//# sourceMappingURL=ingredients.service.js.map