import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from '../services/authentication.service';
import { map, take } from 'rxjs/operators';
let ProfileService = class ProfileService {
    constructor(db, afAuth, authService) {
        this.db = db;
        this.afAuth = afAuth;
        this.authService = authService;
        let currentUser = this.authService.getCurrentUser();
        if (this.afAuth.auth.currentUser) {
            let user = this.afAuth.auth.currentUser.uid;
        }
        if (currentUser) {
            this.refreshProfileCollection(currentUser.uid);
        }
    }
    refreshProfileCollection(userID) {
        this.profileCollection = this.db.collection('users').doc(userID).collection('profile');
        this.profiles = this.profileCollection.snapshotChanges().pipe(take(1), map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    getProfiles() {
        return this.profiles;
    }
    getProfile(id) {
        return this.profileCollection.doc(id).valueChanges().pipe(take(1), map(pro => {
            pro.id = id;
            return pro;
        }));
    }
    updateProfile(profile) {
        return this.profileCollection.doc(profile.id).update({ name: profile.name, age: profile.age, skintype: profile.skintype, skinconcern: profile.skinconcern });
    }
    /*profile_id_user_id(id: string, profId:string){
      return this.profileCollection.doc(id).update({ profid:profId});
    }*/
    addProfile(profile) {
        return this.profileCollection.add(profile);
    }
    deleteProfile(id) {
        return this.profileCollection.doc(id).delete();
    }
};
ProfileService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore,
        AngularFireAuth,
        AuthenticationService])
], ProfileService);
export { ProfileService };
//# sourceMappingURL=profile.service.js.map