import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{AngularFireModule,FirebaseAppConfig}  from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';

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
    component: EventsComponent
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
    EventsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
