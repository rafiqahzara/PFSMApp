import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
let AuthenticationService = class AuthenticationService {
    constructor(db, afAuth, navCtrl) {
        this.db = db;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.userCollection = db.collection('users');
        this.users = this.userCollection.snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    registerUser(value) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password).then(res => {
                console.log("User id after reigstration = " + res.user.uid);
                let user = {
                    email: value.email,
                    id: res.user.uid,
                };
                this.userCollection.doc(res.user.uid).set(user);
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }
    loginUser(value) {
        return firebase.auth().signInWithEmailAndPassword(value.email, value.password);
    }
    getCurrentUser() {
        if (firebase.auth().currentUser) {
            return firebase.auth().currentUser;
        }
        else {
            this.navCtrl.navigateBack('/login');
        }
    }
    logoutUser() {
        return new Promise((resolve, reject) => {
            if (firebase.auth().currentUser) {
                firebase.auth().signOut()
                    .then(() => {
                    console.log("Log Out");
                    resolve();
                }).catch((error) => {
                    reject();
                });
            }
        });
    }
};
AuthenticationService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore,
        AngularFireAuth,
        NavController])
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map