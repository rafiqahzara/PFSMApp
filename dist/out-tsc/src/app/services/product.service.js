import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
let ProductService = class ProductService {
    constructor(db, afs) {
        this.db = db;
        this.afs = afs;
        this.productCollection = this.db.collection('products');
        this.products = this.productCollection.snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getProducts() {
        return this.products;
    }
    getProduct(id) {
        return this.productCollection.doc(id).valueChanges().pipe(take(1), map(prod => {
            prod.id = id;
            return prod;
        }));
    }
    /*updateDocID(id:string, pid:string): Promise<void> {
      return this.productCollection.doc(id).update({ prodId:pid });
    }*/
    getSpecificProducts(id) {
        return this.afs.collection('products', ref => ref.where('id', '==', id)).valueChanges();
    }
    getById(id) {
        return this.productCollection.doc(id).valueChanges();
    }
    searchProduct(name) {
        return this.afs.collection('products', ref => ref.where('name', '==', name)).snapshotChanges();
    }
};
ProductService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore,
        AngularFirestore])
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map