import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

onSubmit2() {
  this.submitted2 = true;

  // // stop here if form is invalid
  // if (this.registerForm2.invalid) {
  //     return;
  // }
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm2.value))
  const registerForm2load = {
  pnumber: this.registerForm2.controls.pnumber.value,
  adnumber: this.registerForm2.controls.adnumber.value,
  fname: this.registerForm2.controls.fname.value,
  phnumber: this.registerForm2.controls.phnumber.value,
  mail: this.registerForm2.controls.mail.value,
  mnumber: this.registerForm2.controls.mnumber.value
  }

  let data_success
  this.http.post("http://localhost:3001/api/v1/kycusers", registerForm2load).subscribe((data) => {
    //console.log(data)
    data_success = data;
    if(data_success.responseMessage.rowCount == 1 ) 
    {
      alert("KYC Details successfully inserted!!");
    } 
    else 
    {
      alert("Please fill the form again!!");
    }
  })
}

onSubmit3() {
  this.submitted3 = true;

  // // stop here if form is invalid
  // if (this.registerForm3.invalid) {
  //     return;
  // }

  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm3.value))
 
  const registerForm3load = {
    add1: this.registerForm3.controls.add1.value,
    add2: this.registerForm3.controls.add2.value,
    city: this.registerForm3.controls.city.value,
    state: this.registerForm3.controls.state.value,
    country: this.registerForm3.controls.country.value,
    pcode: this.registerForm3.controls.pcode.value
    }
  
    let data_success
    this.http.post("http://localhost:3001/api/v1/addressusers", registerForm3load).subscribe((data) => {
      //console.log(data)
      data_success = data;
      if(data_success.responseMessage.rowCount == 1 ) 
      {
        alert("Address Details successfully inserted!!");
      } 
      else 
      {
        alert("Please fill the form again!!");
      }
    })




}


ngOnInit() {
  this.registerForm1 = this.formBuilder.group({
  cbname: ['', Validators.required],
  group: ['', Validators.required],
  mdate: ['', Validators.required],
  aname: ['', Validators.required],
  gender: ['', Validators.required],
  mstatus: ['', Validators.required],
  alname: ['', Validators.required],
  monumber: ['', [Validators.required, Validators.minLength(10)]],
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
  this.submitted1 = true;

  // stop here if form is invalid
  if (this.registerForm1.invalid) {
      return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm1.value))
}

}
