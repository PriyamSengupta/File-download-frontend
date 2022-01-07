import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  // 
  download(){
    return this.http.get("http://localhost:3000/download", {
      responseType: 'blob', reportProgress: true, observe:"events"
    })
  }
}
