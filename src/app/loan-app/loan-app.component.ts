import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loan-app',
  templateUrl: './loan-app.component.html',
  styleUrls: ['./loan-app.component.css']
})

export class LoanAppComponent implements OnInit {
registerForm: FormGroup;
submitted = false;

constructor(private router : Router, private formBuilder: FormBuilder,  private http: HttpClient) { }

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


    const loanPayload = {
      application_code: this.registerForm.controls.appcode.value,
      member_code: this.registerForm.controls.mcode.value,
      member_name: this.registerForm.controls.mname.value,
      mobile_number: this.registerForm.controls.mnumber.value,
      product: this.registerForm.controls.product.value,
      expected_disbursment_date: this.registerForm.controls.eddate.value,
      purpose: this.registerForm.controls.purpose.value,
      rate_of_interest: this.registerForm.controls.roi.value

     }
    this.submitted = true;

    //let data_success
  this.http.post("http://localhost:3001/api/v1/loan", loanPayload).subscribe((data) => {
    console.log(data)
    // data_success = data;
    // if(data_success.responseMessage.length > 0) {
    //   alert("Success");
    // } else {
    //   alert("Invalid Credentials!!");
    // }
  
    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //     return;
    // }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  })
  }
}