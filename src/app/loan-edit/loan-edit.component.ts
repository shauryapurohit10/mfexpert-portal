import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import { LoanApprovalComponent } from '../loan-approval/loan-approval.component'

@Component({
  selector: 'app-loan-edit',
  templateUrl: './loan-edit.component.html',
  styleUrls: ['./loan-edit.component.css']
})

export class LoanEditComponent implements OnInit {
editForm: FormGroup;
submitted = false;
  loan_amount:any;
  users: any[];
  user: any;

  constructor(private router : Router, private formBuilder: FormBuilder,  private http: HttpClient) {}

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      loan_amount: [''],
      updated_loan_amount: ['']
    })
    const approvalId = window.localStorage.getItem('shaurya')
    //debugger
    this.user = JSON.parse(approvalId)
    //this.http.get("http://localhost:3001/api/v1/loaneditusers").subscribe((data) => {
    //console.log(data)
    //this.users = data['responseMessage'];
  // }
  // )
}
onSubmit() {
  const loaneditPayload = {
    updated_loan_amount: this.editForm.controls.updated_loan_amount.value,
   }
  this.submitted = true;

  let data_success
  this.http.post("http://localhost:3001/api/v1/loaneditusers", loaneditPayload).subscribe((data) => {
  //console.log(data)
  data_success = data;
  if(data_success.responseMessage.length > 0) {
    alert("Successfully Updated!");
  } else {
    alert("Please try again!!");
  }

  // stop here if form is invalid
  // if (this.registerForm.invalid) {
  //     return;
  // }
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
})
}
}