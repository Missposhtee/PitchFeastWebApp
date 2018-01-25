import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class AuthService {
    user: Observable<firebase.User>;
  

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;

    

   }


/* creating function */

// registerUser(email,password) {
//   console.log(email)
//   console.log(password)
//   this.afAuth.auth.createUserWithEmailAndPassword(email,password).catch(function(error) {
//     // Handle Errors here.
//     console.log(error);
//   }).then(function(data) {
//     // Handle success
//     console.log(data);
//   })
//   this.router.navigate(['/events'])

// };



signup(email: string, password: string) {
  this.afAuth
    .auth
    .createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Success!', value);
      this.router.navigate(['/events'])
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    })
        
  }   




// login(email: string, password: string) {
//   this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
//       // Handle Errors here.
//       console.log(error);
//     }).then(function(data) {
//       // Handle success
//       console.log(data);


login(email: string, password: string) {
  this.afAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      this.router.navigate(['/events'])
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    })
    
   
};

logout() {
  this.afAuth.auth.signOut();
  this.router.navigate(['/home']);
  
}




}
