import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  DoLogin()
  {  
      this.router.navigateByUrl('/rating');   
      //this.router.navigate(['rating']);   
  }

}
