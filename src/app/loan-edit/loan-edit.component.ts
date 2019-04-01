import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


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
  approve_status:any;
  reject_status:any;
  
  click=false;

  constructor(private router : Router, private formBuilder: FormBuilder,  private http: HttpClient) {}

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      loan_amount: [''],
      updated_loan_amount: ['']
      });

    const approvalId = window.localStorage.getItem('shaurya')
    this.user = JSON.parse(approvalId)
  }
  onSubmit() {
    const loaneditPayload = {
      id: this.user.id,
      loan_amount: this.editForm.controls.updated_loan_amount.value
    }
    this.submitted = true;

    let data_success
    this.http.post("http://localhost:3001/api/v1/loaneditusers", loaneditPayload).subscribe((data) => {
    console.log(data)
    data_success = data;
    if(data_success.responseMessage == 1) {
      alert("Successfully Updated!");
    } else {
      alert("Please try again!!");
    }
  })
}

onClick() {
  this.approve_status=1;
  const loaneditPayload = {
    id: this.user.id,
    loan_amount: this.editForm.controls.updated_loan_amount.value
  }
  this.submitted = true;

  let data_success
  this.http.post("http://localhost:3001/api/v1/loaneditusers", loaneditPayload).subscribe((data) => {
  //console.log(data)
  data_success = data;
  if(data_success.responseMessage.length>0) {
    alert("Successfully Updated!");
  } else {
    alert("Please try again!!");
  }
})
}


}
