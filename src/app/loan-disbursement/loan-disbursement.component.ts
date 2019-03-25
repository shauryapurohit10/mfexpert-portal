import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder} from '@angular/forms';
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

  constructor(private router : Router, private formBuilder: FormBuilder,  private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3001/api/v1/loandisbursementusers").subscribe((data) => {
    //console.log(data)
    this.users = data['responseMessage'];
  })
  }

}
