import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/member/user/user';
import { Admin } from 'src/app/member/admin/admin';
import { Product } from 'src/app/products/product';




@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  u1: User 
  configUserUrl= 'http://localhost:3000/users'
  configAdminUrl= 'http://localhost:3000/admin'
  configProductUrl= 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.configUserUrl)
  }

  getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.configAdminUrl)
  }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.configProductUrl)
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.configUserUrl, user)
  }

  removeUser(id: number): Observable<unknown>{
    const url = `${this.configUserUrl}/${id}`;
    return this.http.delete(url)
  }

  removeProduct(id: number): Observable<unknown>{
    const url = `${this.configProductUrl}/${id}`;
    return this.http.delete(url)
  }

  updateUser(user : User, id: number): Observable<User>{
    const up = `${this.configUserUrl}/${id}`;
    return this.http.put<User>(up, user)
  }

  updateProduct(product : Product, id: number): Observable<Product>{
    const up = `${this.configProductUrl}/${id}`;
    return this.http.put<Product>(up, product)
  }

  getProductDetail(id: number): Observable<Product>{
    const get = `${this.configProductUrl}/${id}`;
    return this.http.get<Product>(get)
  }
}
