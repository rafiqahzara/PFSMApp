import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
let CrudService = class CrudService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    /* //CRUSE USER
    readUser(){
     return this.firestore.collection('user').snapshotChanges();
    }
    createProfile(user){
      return this.firestore.collection('user').add(user)
    }
    updateProfile(userID, user){
      this.firestore.doc('user/'+ userID).update(user);
    }
    */
    //for add reviews
    /*
    - product name: wep api
    - review title
    - review content
    - rating
    */
    create_Review(review) {
        return this.firestore.collection('Reviews').add(review);
    }
    read_Reviews() {
        return this.firestore.collection('Reviews').snapshotChanges();
    }
    update_Reviews(reviewID, review) {
        this.firestore.doc('Reviews/' + reviewID).update(review);
    }
    delete_Review(review_id) {
        this.firestore.doc('Reviews/' + review_id).delete();
    }
};
CrudService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], CrudService);
export { CrudService };
//# sourceMappingURL=crud.service.js.map