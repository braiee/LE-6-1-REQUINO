import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn: boolean = false;
  public redirectUrl: string = "posts";
  
  constructor(private http: HttpClient) { 
    
  }

  login(username: string, password: string) {
    return this.http.post<string>("https://localhost:7066/api/Login/login", {username, password})
  }
}