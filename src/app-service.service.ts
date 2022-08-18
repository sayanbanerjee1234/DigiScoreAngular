import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }
  getCustomerDetails(id:any){
    return this.http.get<any>('https://localhost:7037/api/DigiScore/'+id);
  }
}
