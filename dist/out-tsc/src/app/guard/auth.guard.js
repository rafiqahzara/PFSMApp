import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(next, state) {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    resolve(true);
                }
                else {
                    console.log('User is not logged in');
                    this.router.navigate(['/login']);
                    resolve(false);
                }
            });
        });
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        AuthenticationService])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map