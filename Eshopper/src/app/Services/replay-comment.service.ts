import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReplayComment } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ReplayCommentService {
 
  constructor(private http: HttpClient) { }
  addReplayCommentToComment(recomment : ReplayComment,idComment: any) : Observable<ReplayComment> {
    return this.http.post<ReplayComment>(`http://localhost:8080/api/addReplayCommentToComment/${idComment}`,recomment);
  }
  findReplayCommentsForComment(idComment: any): Observable<ReplayComment[]> {
    return this.http.get<ReplayComment[]>(`http://localhost:8080/api/findReplayCommentsForComment/${idComment}`);
  }

  findAllReplayComments(): Observable<ReplayComment[]> {
    return this.http.get<ReplayComment[]>(`http://localhost:8080/api/findAllReplayComments`);
  }
 

}
 

