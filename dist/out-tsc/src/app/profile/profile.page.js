import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ProfileService } from './../services/profile.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
let ProfilePage = class ProfilePage {
    constructor(profileService, router, authService, afAuth) {
        this.profileService = profileService;
        this.router = router;
        this.authService = authService;
        this.afAuth = afAuth;
    }
    ngOnInit() {
        this.profid = this.authService.getCurrentUser().uid;
        if (this.authService.getCurrentUser()) {
            this.useremail = this.authService.getCurrentUser().email;
        }
        this.profiles = this.profileService.getProfiles();
    }
};
ProfilePage = tslib_1.__decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.page.html',
        styleUrls: ['./profile.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ProfileService,
        Router,
        AuthenticationService,
        AngularFireAuth])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map