import { Routes } from '@angular/router';
import { MainCategoryComponent } from './main-category/main-category.component';
import { LoginComponent } from './login/login.component';
import { authGuardGuard, authorizedGuard } from './core/guards/auth-guard.guard';
import { ProductsComponent } from './products/products.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { NavComponent } from './nav/nav.component';
import { CreateUpdateProductcategoryComponent } from './products/components/create-update-productcategory/create-update-productcategory.component';
import { VariantComponent } from './variant/variant.component';
import { TagComponent } from './tag/tag.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderShippingComponent } from './order-shipping/order-shipping.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderPaymentComponent } from './order-payment/order-payment.component';

export const routes: Routes = [
    {
        path: '',
        component: MainCategoryComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: '',
        component: NavComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'main_category',
        component: MainCategoryComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'sub_category',
        component: SubCategoryComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'Variants',
        component: VariantComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'Tags',
        component: TagComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'Users',
        component: UsersComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'Roles',
        component: RolesComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'Permisions',
        component: PermissionsComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'Orderlist',
        component: OrderListComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'OrderShipping',
        component: OrderShippingComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'OrderItem',
        component: OrderItemComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'OrderPayment',
        component: OrderPaymentComponent,
        canActivate: [authGuardGuard],
    },

    {
        path: 'create_products',
        component: CreateUpdateProductcategoryComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'edit_products/:id',
        component: CreateUpdateProductcategoryComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [authorizedGuard],
    },
];
