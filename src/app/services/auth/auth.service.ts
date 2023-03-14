import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private REST_API_SERVER = "https://dist-castillo-backend.onrender.com/api/";
  constructor(private http: HttpClient) { }

  public doLogin(data:any){
    return this.http.post(`${this.REST_API_SERVER}auth`,data);
  }
}
