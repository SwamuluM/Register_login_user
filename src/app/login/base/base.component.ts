import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  // get form controls
  get f() { return this.loginForm.controls; }


  loginSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.submitted = false;
      console.log('registerForm submit', this.loginForm.value);
      this.loginForm.reset();
    }
  }
}
