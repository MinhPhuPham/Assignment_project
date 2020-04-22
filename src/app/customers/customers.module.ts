import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { UserChangeComponent } from '../usercomponent/user-change/user-change.component';
import { CatalogueComponent } from '../components/catalogue/catalogue.component';
import { TestingComponent } from '../components/testing/testing.component';
import { PieComponent } from '../components/pie/pie.component';
import { EditUserComponent } from '../usercomponent/edit-user/edit-user.component';
import { HomeComponent } from '../components/home/home.component';
import {SharedModule} from '../shared/shared/shared.module'

@NgModule({
  declarations: [
    CustomersComponent,
    UserChangeComponent,
    CatalogueComponent,
    TestingComponent,
    PieComponent,
    EditUserComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
