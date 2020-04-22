// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularFireModule } from '@angular/fire';
import { CountdownModule } from 'ngx-countdown';
import { ChartsModule } from 'ng2-charts';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from '../../services/Authentication/auth.service'


@NgModule({
  imports: [
    // BrowserModule,
    ChartsModule,
    CommonModule,
    // BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
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

    AngularFireModule.initializeApp(environment.firebaseConfig),  // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    
  ],
  exports: [
    // BrowserModule,
    ChartsModule,
    NgxPaginationModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule,
    CountdownModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
  ],
  providers: [AuthService],
})
export class SharedModule { }
