import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-app',
  templateUrl: './loan-app.component.html',
  styleUrls: ['./loan-app.component.css']
})
export class LoanAppComponent implements OnInit {
registerForm: FormGroup;
submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    appcode: ['', Validators.required],
    mnumber: ['', [Validators.required, Validators.minLength(10)]],
    mcode: [''],
    mname: [''],
    product: [''],
    eddate: [''],
    lamount: [''],
    purpose: [''],
    roi: ['']
    });
  }
  
  get f() { return this.registerForm.controls; }
  
  onSubmit() {
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
  
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
  
  }
