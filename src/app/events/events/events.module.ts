import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakePaymentComponent } from '../../payments/make-payment/make-payment.component';
import { PaymentService } from '../../services/payment.service';
import {environment}   from    '../../../environments/environment';
import { EventsComponent } from '../events.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EventsComponent
  ],
  providers:[
    PaymentService
  ]

})
export class EventsModule { }
