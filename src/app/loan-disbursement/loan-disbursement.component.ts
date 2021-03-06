import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loan-disbursement',
  templateUrl: './loan-disbursement.component.html',
  styleUrls: ['./loan-disbursement.component.css']
})
export class LoanDisbursementComponent implements OnInit {
  member_code:any;
  member_name:any;
  loan_amount:any;
  outstanding_amount:any
  status:any;
  loan_type:any;
  users: any[]
  @Output() buttonClicked = new EventEmitter();

  disbursementForm: FormGroup;
  submitted = false;

  constructor(private router : Router, private formBuilder: FormBuilder,  private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3001/api/v1/loandisbursementusers").subscribe((data) => {
    //console.log(data)
    this.users = data['responseMessage'];
  })

  this.disbursementForm = this.formBuilder.group({
    member_code: [''],
    member_name: [''],
    loan_amount: [''],
    outstanding_amount: [''],
    loan_type: [''],
    disbursement_status: ['']
    });
  }

  onSubmit() {
    const loanPayload = {
      member_code: this.disbursementForm.controls.member_code.value,
      member_name: this.disbursementForm.controls.member_name.value,
      loan_amount: this.disbursementForm.controls.loan_amount.value,
      outstanding_amount: this.disbursementForm.controls.outstanding_amount.value,
      loan_type: this.disbursementForm.controls.loan_type.value,
      disbursement_status: this.disbursementForm.controls.disbursement_status.value
     }
    this.submitted = true;

    let data_success
    this.http.post("http://localhost:3001/api/v1/loandisbursementdbusers", loanPayload).subscribe((data) => {
    //console.log(data)
    data_success = data;
    if(data_success.responseMessage.length > 0) {
      alert("Disbursed successfully!");
    } else {
      alert("Please try again later!!");
    }
  })
  }

}
