import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from '../components/home/home.component';
import { CustomersComponent } from './customers.component';
import { UserChangeComponent } from '../usercomponent/user-change/user-change.component';
import { CatalogueComponent } from '../components/catalogue/catalogue.component';
import { TestingComponent } from '../components/testing/testing.component';
import { PieComponent } from '../components/pie/pie.component';
import { EditUserComponent } from '../usercomponent/edit-user/edit-user.component';


import { AuthGuard } from '../shared/guard/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  { path: 'home',component:HomeComponent,},
  
  { path : 'exam/:id' , component : TestingComponent , canActivate : [AuthGuard]},
{ path : 'exam', component : CatalogueComponent , canActivate : [AuthGuard]},
{ path : 'user' , component : UserChangeComponent , canActivate : [AuthGuard], data: { animation: 'isLeft' }},
{ path : 'edit', component:EditUserComponent,canActivate : [AuthGuard], data: { animation: 'isRight' }},
{ path : 'exam/:id/result' , component : PieComponent, data: { animation: 'isRight' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
