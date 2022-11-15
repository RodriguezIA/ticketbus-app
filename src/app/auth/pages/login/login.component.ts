import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]]
  })

  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;

    this.authService.login( email, password ).subscribe( ok => {
      console.log(ok)
        if( ok === true ) {
          this.router.navigateByUrl('/user/home')
        } else {
          // TODO:  mostrar mensaje de error
        }
      });
  }
}
