import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private REST_API_SERVER = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {
  }

  public getCities() {
    return this.http.get(`${this.REST_API_SERVER}resources/cities`);
  }

  // public addProduct(data:any){
  //   return this.http.post(`${this.REST_API_SERVER}productos`,data);
  // }
}
