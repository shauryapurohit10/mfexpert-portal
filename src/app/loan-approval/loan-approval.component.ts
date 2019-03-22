import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';


@Component({
  selector: 'app-loan-approval',
  templateUrl: './loan-approval.component.html',
  styleUrls: ['./loan-approval.component.css']
})
export class LoanApprovalComponent implements OnInit {
  application_code:any;
  member_code:any;
  member_name:any
  loan_amount:any;
  reject_status:any;
  users: any[]
  @Output() buttonClicked = new EventEmitter();

  constructor(private router : Router, private formBuilder: FormBuilder,  private http: HttpClient) {}

  ngOnInit() {
    this.getUsers()
  
  }
  getUsers() {
    this.http.get("http://localhost:3001/api/v1/loanapprovalusers").subscribe((data) => {
      //console.log(data)
      this.users = data['responseMessage'];
    })
  }
  onSubmit(user){
    window.localStorage.setItem('shaurya', JSON.stringify(user))
    this.router.navigate(['/','loanedit']);
  }
  onClick(user) {
    this.reject_status = 1;
    const loanRejectPayload = {
      id: user.id,      
    }
    let data_success
    this.http.post("http://localhost:3001/api/v1/loanrejectusers", loanRejectPayload).subscribe((data) => {
    console.log(data)
    data_success = data;
    this.getUsers()
    if(data_success.responseMessage == 1) {
      alert("Successfully Updated!");
    } else {
      alert("Please try again!!");
    }
  })
    
    

    console.log("Hey");
  }

}
