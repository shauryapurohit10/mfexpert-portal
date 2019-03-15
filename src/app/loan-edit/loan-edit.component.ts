import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loan-edit',
  templateUrl: './loan-edit.component.html',
  styleUrls: ['./loan-edit.component.css']
})
export class LoanEditComponent implements OnInit {
  loan_amount:any;
  //users: any[];

  constructor(private router : Router, private formBuilder: FormBuilder,  private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:3001/api/v1/loaneditusers").subscribe((data) => {
    console.log(data)
    //this.users = data['responseMessage'];
  }
    )}
}
