import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  readonly urlBack;
  
  constructor(private http:HttpClient) { 
    this.urlBack = "http://localhost:8000/model"
  }

  getAllPosts()  {
    return this.http.get(`${this.urlBack}/`);
  }
}
