import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import {Router}  from './../../node_modules/@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  email: string;
  password: string;

  constructor( public authService: AuthService) {}

  registerUser() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  
  }