import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { VehiclesComponent } from 'src/app/pages/vehicles/vehicles.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { CustomersComponent } from 'src/app/pages/customers/customers.component';
import { OrdersComponent } from 'src/app/pages/orders/orders.component';

//import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    //NgxSpinnerModule,
    ToastrModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    UsersComponent,
    VehiclesComponent,
    ProductsComponent,
    CustomersComponent,
    OrdersComponent
    
  ]
})

export class AdminLayoutModule {}
