import { Component, OnInit,HostListener } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import {PaymentService} from '../services/payment.service';
import {environment}  from '../../environments/environment';
import {AngularFireAuth}  from 'angularfire2/auth';

import{AuthService} from'../services/auth.service'; 




@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  handler:any;
  amount = 2000;
  nameToDisplay="";
  

  constructor(private paymentSvc: PaymentService, public authService: AuthService,private afAuth:AngularFireAuth  ) {
    this.afAuth.authState.subscribe((auth) =>{
      if (auth){
        console.log(auth.email)
        this.nameToDisplay =auth.email;
      }
    });
   }

  ngOnInit() {

    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
       image: 'data:image/jpeg;base64,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',
      locale: 'auto',
      token: token => {
        this.paymentSvc.processPayment(token, this.amount)
      }
    });
  }
  handlePayment() {
    this.handler.open({
      name: 'FireStarter',
      excerpt: 'Deposit Funds to Account',
      amount: this.amount
    });
  }
  @HostListener('window:popstate')
    onPopstate() {
      this.handler.close()
    }

    logout(){
      this.authService.logout()
    }

  }