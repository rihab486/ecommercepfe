import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReplayReclamation } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ReplayreclamationService {
  
 

  constructor(private http: HttpClient) { }

  addReplayReclamationToReclamation(reclamation: ReplayReclamation, idComment: any) :Observable<ReplayReclamation>{
    return this.http.post<ReplayReclamation>(`http://localhost:8080/api/addReplayReclamationToReclamation/${idComment}`,reclamation);
  }
  findReplayReclamationsForReclamation(idComment: any): Observable<ReplayReclamation[]> {
    return this.http.get<ReplayReclamation[]>(`http://localhost:8080/api/findReplayReclamationsForReclamation/${idComment}`);
  }
}
