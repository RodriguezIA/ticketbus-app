import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(2) ]],
    apellido_paterno: [ '', [ Validators.required ]],
    apellido_materno: [ '', [Validators.required ]],
    email: [ '', [ Validators.required, Validators.email ]],
    password: [ '', [ Validators.required, Validators.minLength(6) ]]
  })

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm.value);
    console.log(this.registerForm.valid);

    this.router.navigateByUrl('/user/home')
  }

}
