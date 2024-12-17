import { Routes } from '@angular/router';
import { MainCategoryComponent } from './main-category/main-category.component';
import { LoginComponent } from './login/login.component';
import { authGuardGuard, authorizedGuard } from './core/guards/auth-guard.guard';
import { ProductsComponent } from './products/products.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';

export const routes: Routes = [
    {
        path: '',
        component: MainCategoryComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'main_category',
        component: MainCategoryComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [authorizedGuard],
    },
];
