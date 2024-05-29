import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  formRegister!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      cin: ['', [Validators.required]],
      matricule: ['', [Validators.required]],
      poste: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  handleRegister(): void {
    if (this.formRegister.valid) {
      // Handle the registration logic here
      console.log(this.formRegister.value);
    }
  }
}
