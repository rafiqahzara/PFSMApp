import * as tslib_1 from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';
const routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            { path: '', redirectTo: 'filter', pathMatch: 'full' },
            { path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule) },
            { path: 'filter', loadChildren: () => import('../filter/filter.module').then(m => m.FilterPageModule) },
            { path: 'reviews', loadChildren: () => import('../reviews/reviews.module').then(m => m.ReviewsPageModule) },
            {
                path: 'compare',
                loadChildren: () => import('../compare/compare.module').then(m => m.ComparePageModule)
            },
            {
                path: 'search',
                loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
            },
            {
                path: 'landing',
                loadChildren: () => import('../landing/landing.module').then(m => m.LandingPageModule)
            },
            {
                path: 'edit-profile',
                loadChildren: () => import('../edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
            },
            {
                path: 'edit-profile/:id',
                loadChildren: () => import('../edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
            },
            {
                path: 'login',
                loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
            },
            {
                path: 'register',
                loadChildren: () => import('../register/register.module').then(m => m.RegisterPageModule)
            },
            {
                path: 'product-display',
                loadChildren: () => import('../product-display/product-display.module').then(m => m.ProductDisplayPageModule)
            },
            {
                path: 'product-display/:id',
                loadChildren: () => import('../product-display/product-display.module').then(m => m.ProductDisplayPageModule)
            },
            {
                path: 'add-review',
                loadChildren: () => import('../add-review/add-review.module').then(m => m.AddReviewPageModule)
            },
            {
                path: 'add-review/:id',
                loadChildren: () => import('../add-review/add-review.module').then(m => m.AddReviewPageModule),
            },
        ]
    }
];
let TabsRoutingModule = class TabsRoutingModule {
};
TabsRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TabsRoutingModule);
export { TabsRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map