import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { ProfileService } from './../services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
let EditProfilePage = class EditProfilePage {
    constructor(profileService, 
    //private loadingCtrl: LoadingController,
    //private alertCtrl: AlertController,
    //private navCtrl: NavController,
    toastCtrl, router, authService, activatedRoute) {
        this.profileService = profileService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.profile = {
            name: "",
            age: undefined,
            skintype: "",
            skinconcern: "",
            profid: ""
        };
    }
    ngOnInit() {
        if (this.authService.getCurrentUser() == null) {
            this.router.navigate(['/login']);
        }
        else {
            this.useremail = this.authService.getCurrentUser().email;
        }
        this.profile.profid = this.authService.getCurrentUser().uid;
    }
    ionViewWillEnter() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.profileService.getProfile(id).subscribe(profile => {
                this.profile = profile;
            });
        }
    }
    addProfile() {
        this.profileService.addProfile(this.profile).then(() => {
            this.router.navigateByUrl('/profile');
            this.showToast('profile added');
        }, err => {
            this.showToast('There was a some problem in adding your profile :(');
        });
    }
    updateProfile() {
        this.profileService.updateProfile(this.profile).then(() => {
            this.router.navigateByUrl('/profile');
            this.showToast('profile updated');
        }, err => {
            this.showToast('There was a some problem in updating your profile :(');
        });
    }
    showToast(msg) {
        this.toastCtrl.create({
            message: msg,
            duration: 2000
        }).then(toast => toast.present());
    }
    deleteProfile() {
        this.profileService.deleteProfile(this.profile.id).then(() => {
            this.router.navigateByUrl('/profile');
            this.showToast('delete profile');
        }, err => {
            this.showToast('Cannot delete');
        });
    }
};
EditProfilePage = tslib_1.__decorate([
    Component({
        selector: 'app-edit-profile',
        templateUrl: './edit-profile.page.html',
        styleUrls: ['./edit-profile.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ProfileService,
        ToastController,
        Router,
        AuthenticationService,
        ActivatedRoute])
], EditProfilePage);
export { EditProfilePage };
//# sourceMappingURL=edit-profile.page.js.map