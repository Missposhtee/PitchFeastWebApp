import { Component, OnInit,HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl,ReactiveFormsModule,FormGroup,FormBuilder,Validator } from '@angular/forms';


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

  existingEmailContent = "";
  existingEmailContentFormControl = new FormControl();
  existingPasswordContent = "";
  existingPasswordContentFormControl = new FormControl();




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
    this.authService.signup(this.newEmailContent, this.newPasswordContent);


  }


  login() {

    if (this.existingEmailContent.trim() === '' || this.existingPasswordContent.trim() === '') {
      return;
    }

    console.log('Form contents are:');
    console.log(this.existingEmailContent);
    console.log(this.existingPasswordContent);
    this.authService.login(this.existingEmailContent, this.existingPasswordContent);

  }

  
}