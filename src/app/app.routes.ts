import { Routes } from '@angular/router';
import { MainCategoryComponent } from './main-category/main-category.component';
import { LoginComponent } from './login/login.component';
import { authGuardGuard, authorizedGuard } from './core/guards/auth-guard.guard';

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
