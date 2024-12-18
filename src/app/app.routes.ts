import { Routes } from '@angular/router';
import { MainCategoryComponent } from './main-category/main-category.component';
import { LoginComponent } from './login/login.component';
import { authGuardGuard, authorizedGuard } from './core/guards/auth-guard.guard';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductsComponent } from './products/products.component';


export const routes: Routes = [


    {
        path: 'main-category',
        component: MainCategoryComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'sub-category',
        component: SubCategoryComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [authorizedGuard]
    },
]
