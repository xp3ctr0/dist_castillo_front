import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private REST_API_SERVER = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {
  }

  public getProducts() {
    return this.http.get(`${this.REST_API_SERVER}productos`);
  }
}
