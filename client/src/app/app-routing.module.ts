import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {SecureGuard} from './guard/secure.guard';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminComponent } from './component/account/admin/admin.component';
import { UsersComponent } from './component/account/users/users.component';
import { HomeAssComponent } from './component/home-ass/home-ass.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { ResultsComponent } from './component/results/results.component';
import { ProfileComponent } from './component/account/profile/profile.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutQAComponent } from './component/about-qa/about-qa.component';
import { WrongpathComponent } from './component/wrongpath/wrongpath.component';

import { ListsubjectComponent } from './component/listsubject/listsubject.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path:'',
    component: HomeAssComponent, pathMatch: 'full'},
      {path: 'quiz:id', component : QuizComponent},
      {path: 'result', component : ResultsComponent,canActivate : [SecureGuard]},
      {path: 'profile', component : ProfileComponent,canActivate : [AuthGuard]},
      {path: 'contact', component : ContactComponent},
      {path: 'about', component : AboutQAComponent},
      {path: 'login', component : LoginComponent},
      {path: 'register', component : RegisterComponent},
      {path: 'user/:id', component : UsersComponent,canActivate : [SecureGuard] },
      {path: 'admin', component : AdminComponent},
      {path: 'listsubject', component:ListsubjectComponent},
  {path:'wrongpath', component:WrongpathComponent},
  {path:'**', redirectTo: 'wrongpath', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
