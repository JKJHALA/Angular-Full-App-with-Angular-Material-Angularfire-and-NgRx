import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginFG = new FormGroup({


    loginName :new FormControl('', Validators.email),
    password  : new FormControl('',[Validators.required,Validators.minLength(6)]),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
