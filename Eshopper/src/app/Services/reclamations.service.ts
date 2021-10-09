import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ReclamationsService {
  
  constructor(private http: HttpClient) { }
  addReclamationToUser(reclamation: Reclamation, idUser: any):Observable<Comment> {
    return this.http.post<Comment>(`http://localhost:8080/api/addReclamationToUser/${idUser}`,reclamation);
  }
  findReclamationsForUser(id: any): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`http://localhost:8080/api/findReclamationsForUser/${id}`);
  }
  removeFromReclamation(idReclamation: any, idUser: any): Observable<Reclamation>  {
    return this.http.delete<Reclamation>(`http://localhost:8080/api/removeFromReclamation/${idReclamation}/${idUser}`);
  }
  findAllReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`http://localhost:8080/api/findAllReclamations`);
  }
 
}
