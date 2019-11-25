import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { CountdownModule } from 'ngx-countdown';

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
import { AuthService } from './services/auth.service';
import { ResultComponent } from './component/result/result.component';
import { RepassComponent } from './component/account/repass/repass.component';

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
    ListsubjectComponent,
    ResultComponent,
    RepassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    FormsModule,
    CountdownModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  AngularFireStorageModule, // imports firebase/storage only needed for storage features
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }