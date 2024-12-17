import { Routes } from '@angular/router';
import { MainCategoryComponent } from './main-category/main-category.component';
import { ProductsComponent } from './products/products.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';

export const routes: Routes = [
    {
        path: '',
        component: MainCategoryComponent
    },
];
