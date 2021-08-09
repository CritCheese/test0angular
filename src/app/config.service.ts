import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/member/user/user';
import { Admin } from 'src/app/member/admin/admin';




@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUserUrl= 'http://localhost:3000/users'
  configAdminUrl= 'http://localhost:3000/admin'

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.configUserUrl)
  }

  getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.configAdminUrl)
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.configUserUrl, user)
  }

  removeUser(id: number): Observable<unknown>{
    const url = `${this.configUserUrl}/${id}`;
    return this.http.delete(url)
  }

  updateUser(user : User, id: number): Observable<User>{
    const up = `${this.configUserUrl}/${id}`;
    return this.http.put<User>(up, user)
  }

  activateUser(id: number, user: User){

  }
}
