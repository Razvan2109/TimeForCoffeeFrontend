import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root',
  })
  export class ProfileService {
    private baseUrl: string = environment.baseUrl;
    private publicHeaders = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };

    constructor(private http: HttpClient) {}

    getProfile(data: string){
        return this.http.get(
            this.baseUrl + 'api/User/GetByUsername?name='+data,
            this.publicHeaders
        );
    }
}