import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private REST_API_SERVER = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {
  }

  public getClients() {
    return this.http.get(`${this.REST_API_SERVER}clientes`);
  }

  public addClient(data: any) {
    return this.http.post(`${this.REST_API_SERVER}clientes`, data);
  }
}
