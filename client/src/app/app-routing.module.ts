import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const routes: Routes = [
  { path:'',
    component: HomeAssComponent, pathMatch: 'full'},
      {path: 'quiz', component : QuizComponent},
      {path: 'result', component : ResultsComponent},
      {path: 'profile', component : ProfileComponent},
      {path: 'contact', component : ContactComponent},
      {path: 'about', component : AboutQAComponent},
      {path: 'login', component : LoginComponent},
      {path: 'register', component : RegisterComponent},
      {path: 'user/:id', component : UsersComponent},
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
