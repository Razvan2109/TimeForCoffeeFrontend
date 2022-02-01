import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root',
  })
  export class RegisterService {
    private baseUrl: string = environment.baseUrl;
    private publicHeaders = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };

    constructor(private http: HttpClient) {}

    register(data: User) {
        console.log("Am intrat aici")
        console.log(data)
        return this.http.post(
          this.baseUrl + 'api/User/CreateUser',
          data
          
        );
      }
}