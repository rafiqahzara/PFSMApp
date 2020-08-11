import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
let RegisterPage = class RegisterPage {
    constructor(navCtrl, alertCtrl, authService, formBuilder, router) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ])),
        });
    }
    tryRegister(value) {
        this.authService.registerUser(value).then(res => {
            let alertOptions = {
                header: "Account created",
                message: "For email: " + value.email,
                buttons: ['ok']
            };
            this.showAlert(alertOptions);
            this.authService.loginUser(value).then(() => {
                this.router.navigate(["/tabs"]);
            }).catch(() => {
                let alertOptions = {
                    header: "Can't login",
                    message: "Error logging you in",
                    buttons: ['ok']
                };
                this.showAlert(alertOptions);
            });
        }, err => {
            let alertOptions = {
                header: "Cannot register",
                message: err.message,
                buttons: ['ok']
            };
            this.showAlert(alertOptions);
        });
    }
    showAlert(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let alertDialog = yield this.alertCtrl.create(options);
            return yield alertDialog.present();
        });
    }
};
RegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        AlertController,
        AuthenticationService,
        FormBuilder,
        Router])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map