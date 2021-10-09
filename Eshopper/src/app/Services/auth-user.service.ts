import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/model';
const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  
  constructor(private http: HttpClient) { }
  register(username: string, email: string, password: string ,adresse: string,ville: string,phone : any, codepostal:any ): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      adresse, 
      ville,
      phone,
      codepostal
    }, httpOptions);
  }
  login(credentials:any): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email :credentials.email,
      password:credentials.password
    }, httpOptions);
  }
  findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8080/api/auth/findAllUsers`);
  }

  deleteuser(id: any) : Observable<User> {
    return this.http.delete<User>(`http://localhost:8080/api/auth/deleteUser/${id}`);
  }
  finduserbyid(id: any) :Observable<User> {
    return this.http.get<User>(`http://localhost:8080/api/auth/findUserById/${id}`);
  }


}
