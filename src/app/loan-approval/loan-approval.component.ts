import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


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
  users: any[]
  @Output() buttonClicked = new EventEmitter();

  constructor(private router : Router, private formBuilder: FormBuilder,  private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:3001/api/v1/loanapprovalusers").subscribe((data) => {
    //console.log(data)
    this.users = data['responseMessage'];
  })
  }
  onSubmit(user){
    window.localStorage.setItem('shaurya', JSON.stringify(user))
    this.router.navigate(['/','loanedit']);
  }
}
