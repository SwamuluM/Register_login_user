import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      gender: [''],
      address: [''],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cnfpassword: ['', Validators.required],
    }, {
      validator: this.mustMatch('password', 'cnfpassword')
    });
  }
  // get form controls
  get f() { return this.registerForm.controls; }

  mustMatch(pwd, cnfPwd) {
    return (formGroup: FormGroup) => {
      const pwd1 = formGroup.controls[pwd];
      const pwd2 = formGroup.controls[cnfPwd];

      if (pwd2.errors && !pwd2.errors.mustMatch) { return; }

      if (pwd1.value !== pwd2.value) {
        pwd2.setErrors({ mustMatch: true });
      } else {
        pwd2.setErrors(null);
      }
    };
  }

  registerSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.submitted = false;
      console.log('registerForm submit', this.registerForm.value);
      this.registerForm.reset();
    }
  }
}
