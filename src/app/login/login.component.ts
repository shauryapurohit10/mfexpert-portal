import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {ApiService} from "../services/api.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
loginForm: FormGroup;
//invalidLogin: boolean = false;

constructor(private router : Router, private formBuilder: FormBuilder,  private http: HttpClient) { }

onSubmit() {
  // if (this.loginForm.invalid) {
  //   return;
  // }
  //debugger
  const loginPayload = {
    username: this.loginForm.controls.username.value,
    password: this.loginForm.controls.password.value
   }
  // this.apiService.login(loginPayload).subscribe(data => {
  //   if(data.id != null) {
  //     this.router.navigate(['/','mainpage']);
  //     console.log("Login successful");
  //   }else {
  //     this.invalidLogin = true;
  //     alert(data.message);
  //   }
  // });
  let data_success
  this.http.post("http://localhost:3001/api/v1/loginusers", loginPayload).subscribe((data) => {
    //console.log(data)
    data_success = data;
    if(data_success.responseMessage.length > 0) {
      this.router.navigate(['/','mainpage']);
    } else {
      alert("Invalid Credentials!!");
    }
      // if(data.id != null) {
      //   this.router.navigate(['/','mainpage']);
      //   console.log("Login successful");
      // } else {
      //   this.invalidLogin = true;
      //   alert(data.message);
      // }
    })
}

ngOnInit() {
  this.loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

 }
