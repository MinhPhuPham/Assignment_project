import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any // save logged in user data
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service 
    public router: Router,
    public afs: AngularFirestore, // inject Firestore service
    public ngZone: NgZone // ngzone service to remote outside scope warning
  ) {
    /* saving user data in localstorage when logged in and
    setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  } // end of constructor

  // Sign in with email/password
  async SignIn(email , password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email , password)
      .then(result => {
        this.ngZone.run( () => {
          this.router.navigate(['user']);
        });
        this.SetUserData(result.user);
      }).catch(error => {
        window.alert(error.message);
      })
  }

  // Sign up with email/password
   async SignUp(email , password) {
    try {
       const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
       /*  call the sendVirificationMail() function when new user sign up
       and returns promise */
       this.SendVerificationMail();
       this.SetUserData(result.user);
     }
     catch (error) {
       window.alert(error.message);
     }
  }

  // Send email verification when new user sign up
  async SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then( () => {
        this.router.navigate(['verify-email'])
      })
  }

  // Reset Forggot password
  async ForgotPassWord(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then( () => {
        window.alert('Password reset email sent, check your inbox');
      }).catch( error => {
        window.alert(error);
      })
  }

  get isLoggedIn() : boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  get isLoggedOut() : boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? false : true;
  }

  //Auth logic to run auth providers
  async AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then( result => {
        this.ngZone.run( () => {
          this.router.navigate(['user'])
        })
        this.SetUserData(result.user);
      }).catch( error => {
        window.alert(error)
      })
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  //Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin( new auth.FacebookAuthProvider());
  }


  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData : User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out 
  async SignOut() {
    return this.afAuth.auth.signOut().then( () => {
      localStorage.removeItem('user');
      this.router.navigate(['login'])
    })
  }
}
