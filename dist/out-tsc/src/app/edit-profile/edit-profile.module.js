import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditProfilePageRoutingModule } from './edit-profile-routing.module';
import { EditProfilePage } from './edit-profile.page';
let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EditProfilePageRoutingModule
        ],
        declarations: [EditProfilePage]
    })
], EditProfilePageModule);
export { EditProfilePageModule };
//# sourceMappingURL=edit-profile.module.js.map