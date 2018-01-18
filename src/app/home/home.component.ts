import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';

import{AuthService} from'../services/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newEmailContent = "";
  newEmailContentFormControl = new FormControl();
  newPasswordContent = "";
  newPasswordContentFormControl = new FormControl();


  constructor(public authService: AuthService) { }

  ngOnInit() {
  }



  registerUser() {

    if (this.newEmailContent.trim() === '' || this.newPasswordContent.trim() === '') {
      return;
    }

    console.log('Form contents are:');
    console.log(this.newEmailContent);
    console.log(this.newPasswordContent);
    this.authService.registerUser(this.newEmailContent, this.newPasswordContent);

  }
}
