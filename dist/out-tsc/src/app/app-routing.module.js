import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'landing',
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingPageModule)
    },
    {
        path: 'edit-profile',
        loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
    },
    {
        path: 'edit-profile/:id',
        loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
    },
    {
        path: 'product-display',
        loadChildren: () => import('./product-display/product-display.module').then(m => m.ProductDisplayPageModule)
    },
    {
        path: 'product-display/:id',
        loadChildren: () => import('./product-display/product-display.module').then(m => m.ProductDisplayPageModule)
    },
    {
        path: 'add-review',
        loadChildren: () => import('./add-review/add-review.module').then(m => m.AddReviewPageModule)
    },
    {
        path: 'add-review/:id',
        loadChildren: () => import('./add-review/add-review.module').then(m => m.AddReviewPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map