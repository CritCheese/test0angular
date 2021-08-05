import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router) { }

  sendToken(token: string){
    localStorage.setItem('name', token)
  }

  getToken(){
    return localStorage.getItem('name')
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  logOut(){
    localStorage.removeItem('name')
    this.myRoute.navigate(['/login1'])
  }

}
