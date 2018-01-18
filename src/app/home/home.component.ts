import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';



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


  constructor() { }

  ngOnInit() {
  }



  registerUser() {

    if (this.newEmailContent.trim() === '' || this.newEmailContent.trim() === '') {
      return;
    }

    console.log('Form contents are:');
    console.log(this.newEmailContent);
    console.log(this.newPasswordContent);
  }
}
