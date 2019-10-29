import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/_layout/navbar/navbar.component';
import { FooterComponent } from './component/_layout/footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UsersComponent,
    HomeAssComponent,
    QuizComponent,
    ResultsComponent,
    ProfileComponent,
    ContactComponent,
    AboutQAComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
