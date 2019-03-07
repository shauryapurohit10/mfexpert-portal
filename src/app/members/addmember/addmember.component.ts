import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

flag:number;

show(obj:number) {
  this.flag = obj;
}

registerForm1: FormGroup;
registerForm2: FormGroup;
registerForm3: FormGroup;
submitted1 = false;
submitted2 = false;
submitted3 = false;

//model: any = {};

constructor(private router : Router, private formBuilder: FormBuilder,  private http: HttpClient) { }
ngOnInit() {
  this.registerForm1 = this.formBuilder.group({
  cbname: ['', Validators.required],
  group: ['', Validators.required],
  mdate: ['', Validators.required],
  aname: ['', Validators.required],
  gender: ['', Validators.required],
  mstatus: ['', Validators.required],
  alname: ['', Validators.required],
  mnumber: ['', [Validators.required, Validators.minLength(10)]],
});
this.registerForm2 = this.formBuilder.group({
  pnumber:  ['', Validators.required],
  adnumber:  ['', Validators.required],
  fname: ['', Validators.required],
  phnumber: ['', Validators.required],
  mail:  ['', Validators.required],
  mnumber: ['', [Validators.required, Validators.minLength(10)]]
  // lastName: ['', Validators.required],
  // email: ['', [Validators.required, Validators.email]],
  // password: ['', [Validators.required, Validators.minLength(6)]]
});
this.registerForm3 = this.formBuilder.group({
  add1: ['', Validators.required],
  add2: ['', Validators.required],
  city: ['', Validators.required],
  state: ['', Validators.required],
  country: ['', Validators.required],
  pcode: ['', [Validators.required,Validators.minLength(6)]]
});
}

get f1() { return this.registerForm1.controls; }
get f2() { return this.registerForm2.controls; }
get f3() { return this.registerForm3.controls; }

onSubmit1() {
  // if (this.loginForm.invalid) {
  //   return;
  // }
  //debugger
  const addmemberPayload = {
    
    cbname: this.registerForm1.controls.cbname.value,
    group: this.registerForm1.controls.group.value,
    mdate:this.registerForm1.controls.mdate.value,
    aname: this.registerForm1.controls.aname.value,
    gender: this.registerForm1.controls.gender.value,
    mstatus:this.registerForm1.controls.mstatus.value,
    alname:this.registerForm1.controls.alname.value,
    mnumber:this.registerForm1.controls.mnumber.value,
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
  this.http.post("http://localhost:3001/api/v1/addmember", addmemberPayload).subscribe((data) => {
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

onSubmit2() {
  this.submitted2 = true;

  // stop here if form is invalid
  if (this.registerForm2.invalid) {
      return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm2.value))
}

onSubmit3() {
  this.submitted3 = true;

  // stop here if form is invalid
  if (this.registerForm3.invalid) {
      return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm3.value))
}

}
