import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';

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
import { WrongpathComponent } from './component/wrongpath/wrongpath.component';
import { ListsubjectComponent } from './component/listsubject/listsubject.component';

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
    WrongpathComponent,
    ListsubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
