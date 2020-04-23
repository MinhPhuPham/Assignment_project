import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
// import {HomeComponent } from './components/home/home.component';
import {ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SignInComponent } from './usercomponent/sign-in/sign-in.component';
import { SignUpComponent } from './usercomponent/sign-up/sign-up.component';
import { VerifyComponent } from './usercomponent/verify/verify.component';
import { ForgotPassComponent } from './usercomponent/forgot-pass/forgot-pass.component';
import { SecureInnerPages } from './shared/guard/secure-inner-pages.guard.ts.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
const routes: Routes = [
  { path: '', children:[
    
  { path: '', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  ] },
  { path : 'contact' , component : ContactComponent},
    { path : 'about' , component : AboutComponent },
    { path : 'login', component : SignInComponent , canActivate : [SecureInnerPages]},
    { path : 'register', component : SignUpComponent , canActivate : [SecureInnerPages]},
    { path : 'verify-email' , component : VerifyComponent , canActivate : [SecureInnerPages] },
    { path : 'forgot-pass' , component : ForgotPassComponent , canActivate : [SecureInnerPages]},
  {path:'wrongpath', component:NotFoundComponent},
    {path:'**', redirectTo: 'wrongpath',pathMatch:'full'},
  // { path : 'home' , component : HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
