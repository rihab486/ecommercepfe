import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tailles } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class TaillesServiceService {
 
 
  
 
  constructor(private http: HttpClient) { }
  editTailles(taille: Tailles, idTaille: any) : Observable<Tailles> {
    return this.http.put<Tailles>(`http://localhost:8080/api/editTaille/${idTaille}`, taille);
  }
  addTaillesToProduct(taille: Tailles, idProduct: any): Observable<Tailles> {
    return this.http.post<Tailles>(`http://localhost:8080/api/addTaillesToProduct/${idProduct}`, taille);
  }
  
  findTaillesForProduct(idProduct: number) : Observable<Tailles[]> {
    return this.http.get<Tailles[]>(`http://localhost:8080/api/findTaillesForProduct/${idProduct}`);
  }
  findAllTailles(): Observable<Tailles[]> {
    return this.http.get<Tailles[]>(`http://localhost:8080/api/findAllTailles`);
  }
  deletetaille(id: number): Observable<Tailles> {
    return this.http.delete<Tailles>(`http://localhost:8080/api/deleteTailles/${id}`);
  }
 
}
