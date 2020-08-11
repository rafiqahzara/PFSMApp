import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfilePage } from './profile.page';
const routes = [
    {
        path: '',
        component: ProfilePage,
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ProfilePageRoutingModule);
export { ProfilePageRoutingModule };
//# sourceMappingURL=profile-routing.module.js.map