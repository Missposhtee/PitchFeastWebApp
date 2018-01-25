import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{AngularFireModule,FirebaseAppConfig}  from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment}  from '../environments/environment';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import  {MakePaymentComponent} from './payments/make-payment/make-payment.component';



import { AuthService } from './services/auth.service';
import {EventsService} from './services/events.service';
import {PaymentService} from './services/payment.service';



export const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'events',
    component: EventsComponent, 
  }

];


  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCFO53s8MO0ZRvT3GwYvd-7HXAm9o4cbtU",
    authDomain: "pitchfeast.firebaseapp.com",
    databaseURL: "https://pitchfeast.firebaseio.com",
    projectId: "pitchfeast",
    storageBucket: "pitchfeast.appspot.com",
    messagingSenderId: "805429618375"
  };


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    EventsComponent,
    MakePaymentComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    


    


  ],
  providers: [
    AuthService,
    EventsService,
    PaymentService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }