import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularFireModule } from '@angular/fire';
import { CountdownModule } from 'ngx-countdown';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AskComponent } from './components/ask/ask.component';
import { SignInComponent } from './usercomponent/sign-in/sign-in.component';
import { SignUpComponent } from './usercomponent/sign-up/sign-up.component';

import { UserChangeComponent } from './usercomponent/user-change/user-change.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { TestingComponent } from './components/testing/testing.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/Authentication/auth.service'
import { VerifyComponent } from './usercomponent/verify/verify.component';
import { ForgotPassComponent } from './usercomponent/forgot-pass/forgot-pass.component';
import { PieComponent } from './components/pie/pie.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditUserComponent } from './usercomponent/edit-user/edit-user.component';
@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FeedbackComponent,
    AskComponent,
    SignInComponent,
    SignUpComponent,
    UserChangeComponent,
    CatalogueComponent,
    TestingComponent,
    NavComponent,
    FooterComponent,
    VerifyComponent,
    ForgotPassComponent,
    PieComponent,
    ScrollToTopComponent,
    NotFoundComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    CountdownModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
