import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ChatserviceService {
  private apiUrl = 'https://localhost:7056';

  constructor(private http: HttpClient) { }

  
  
  sendEmail(prompt: any) {   
    const headers = new HttpHeaders().set('Content-Type', 'application/json');    
    return this.http.post(`${this.apiUrl}/api/Email/actionsitems`, prompt,{ headers });
  }

  ssoGoogle(){
    const headersT = new HttpHeaders().set('Content-Type', 'application/json');    
    return this.http.get(`${this.apiUrl}/api/Email`);

  }
}
