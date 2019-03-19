import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-loan-approval',
  templateUrl: './loan-approval.component.html',
  styleUrls: ['./loan-approval.component.css']
})
export class LoanApprovalComponent implements OnInit {

  //users:any;
  application_code:any;
  member_code:any;
  member_name:any
  loan_amount:any;
  users: any[]
  @Output() buttonClicked = new EventEmitter();

  constructor(private router : Router, private formBuilder: FormBuilder,  private http: HttpClient) {}

  ngOnInit() {
    //let data_success
    this.http.get("http://localhost:3001/api/v1/loanapprovalusers").subscribe((data) => {
    //console.log(data)
    this.users = data['responseMessage'];
    // this.application_code=this.users[0].application_code;
    // this.member_code=this.users[1].member_code;
    // this.member_name=this.users[2].member_name;
    // this.loan_amount=this.users[3].loan_amount;
    // data_success = data;
    // if(data_success.responseMessage.length > 0) {
    //   alert("Details inserted successfully!");
    // } else {
    //   alert("Invalid Credentials!!");
    // }
  })
  }
  onSubmit(user) {
    // let data_success
    // this.http.get("http://localhost:3001/api/v1/loanapprovalusers").subscribe((data) => {
    // //console.log(data)
    // data_success = data;
    // if(data_success.responseMessage.length > 0) {
      window.localStorage.setItem('shaurya', JSON.stringify(user))
      this.router.navigate(['/','loanedit']);
      //console.log(user.loan_amount);
      //this.buttonClicked.emit(user.loan_amount);
  //   } else {
  //     alert("Please again Later!!");
  //   }
  // })
  }

}