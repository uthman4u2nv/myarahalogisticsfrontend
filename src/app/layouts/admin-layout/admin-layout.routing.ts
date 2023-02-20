import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { VehiclesComponent } from 'src/app/pages/vehicles/vehicles.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { CustomersComponent } from 'src/app/pages/customers/customers.component';
import { OrdersComponent } from 'src/app/pages/orders/orders.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'users',           component: UsersComponent },
    { path: 'vehicles',          component:VehiclesComponent},
    { path: 'products',          component:ProductsComponent},
    { path: 'customers',          component:CustomersComponent},
    { path: 'orders',          component:OrdersComponent}
];
