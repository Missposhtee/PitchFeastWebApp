import { Injectable } from '@angular/core';
import {AngularFireDatabase}  from 'angularfire2/database';
import {AngularFireAuth}  from 'angularfire2/auth';




@Injectable()
export class PaymentService {

  userId:string;
  balance:number;
  

  constructor(private db:AngularFireDatabase, private afAuth:AngularFireAuth) { 
    this.afAuth.authState.subscribe((auth) =>{
      if (auth){
        console.log(auth.email)
      }
    });
  
  }

  //this will save token to firebase, triggering the cloud function
  processPayment(token: any, amount: number) {
    const payment = { token, amount }
    return this.db.list(`/payments/${this.userId}`).push(payment)
  }

}
