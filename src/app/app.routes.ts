import { Routes } from '@angular/router';
import { MainCategoryComponent } from './main-category/main-category.component';
import { MAinCategryComponent } from './main-categry/main-categry.component';
import { SubCategryComponent } from './sub-categry/sub-categry.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
];
