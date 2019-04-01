import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


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
    application_code: ['', Validators.required],
    member_code: ['', [Validators.required, Validators.minLength(10)]],
    member_name: [''],
    mobile_number: [''],
    product: [''],
    expected_disbursment_date: [''],
    loan_amount: [''],
    purpose: [''],
    rate_of_interest: [''],
    approve_status: [''],
    reject_status: ['']
    });
  }
  
  get f() { return this.registerForm.controls; }
  
  onSubmit() {


    const loanPayload = {
      application_code: this.registerForm.controls.application_code.value,
      member_code: this.registerForm.controls.member_code.value,
      member_name: this.registerForm.controls.member_name.value,
      mobile_number: this.registerForm.controls.mobile_number.value,
      product: this.registerForm.controls.product.value,
      expected_disbursment_date: this.registerForm.controls.expected_disbursment_date.value,
      loan_amount: this.registerForm.controls.loan_amount.value,
      purpose: this.registerForm.controls.purpose.value,
      rate_of_interest: this.registerForm.controls.rate_of_interest.value,
      approve_status: this.registerForm.controls.approve_status.value,
      reject_status: this.registerForm.controls.reject_status.value

     }
    this.submitted = true;

    let data_success
    this.http.post("http://localhost:3001/api/v1/loan", loanPayload).subscribe((data) => {
    //console.log(data)
    data_success = data;
    if(data_success.responseMessage.length > 0) {
      alert("Details inserted successfully!");
      this.registerForm.reset({
        'application_code': ' ',
        'member_code': '',
        'member_name': '',
        'mobile_number': '',
        'expected_disbursment_date': '',
        'loan_amount': '',
        'purpose': '',
         'rate_of_interest': '',
         'approve_status': '',
         'reject_status': ''
       });
    } else {
      alert("Invalid Credentials!!");
    }
  
    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //     return;
    // }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  })
  }
}