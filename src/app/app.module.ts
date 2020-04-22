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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {CustomersModule} from './customers/customers.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignInComponent } from './usercomponent/sign-in/sign-in.component';
import { SignUpComponent } from './usercomponent/sign-up/sign-up.component';
import {SharedModule} from './shared/shared/shared.module'

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/Authentication/auth.service'
import { VerifyComponent } from './usercomponent/verify/verify.component';
import { ForgotPassComponent } from './usercomponent/forgot-pass/forgot-pass.component';

import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { from } from 'rxjs';


@NgModule({

  declarations: [
    AppComponent,
    // HomeComponent,
    AboutComponent,
    ContactComponent,
    SignInComponent,
    SignUpComponent,
    
    NavComponent,
    FooterComponent,
    VerifyComponent,
    ForgotPassComponent,
    
    ScrollToTopComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    CustomersModule,
    ToastrModule.forRoot(
      {  
        timeOut: 1000,
        positionClass:'toast-bottom-right',  
        closeButton: true,  
      }  
    ) ,
    MDBBootstrapModule.forRoot(),
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    CountdownModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
