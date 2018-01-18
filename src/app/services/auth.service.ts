import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }


/* creating function */

registerUser(email,password) {
  console.log(email)
  console.log(password)
  this.afAuth.auth.createUserWithEmailAndPassword(email,password).catch(function(error) {
    // Handle Errors here.
    console.log(error);
  }).then(function(data) {
    // Handle success
    console.log(data);
  })

}




}
