import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import {User} from "../model/user.model";
//import { Observable } from "rxjs/Observable"
// import {ApiResponse} from "../model/api.response";


@Injectable() 
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3001/api/v1';

  login(loginPayload) : any {
    return this.http.post("http://localhost:3001/api/v1/loginuser", loginPayload)
  }

  
}
