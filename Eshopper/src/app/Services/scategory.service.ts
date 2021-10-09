import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SCategory } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class SCategoryService {
  
  constructor(private http: HttpClient) { }

  addSCategoryToCategory(scategory: SCategory, idCategory: any): Observable<SCategory> {
    return this.http.post<SCategory>(`http://localhost:8080/api/addSCategoryToCategory/${idCategory}`, scategory);
  }
  editSCategory(scategory: SCategory, id: any) : Observable<SCategory> {
    return this.http.put<SCategory>(`http://localhost:8080/api/editSCategory/${id}`, scategory);
  }
  findSCategoriesForCategory(id: any): Observable<SCategory[]> {
    return this.http.get<SCategory[]>(`http://localhost:8080/api/findSCategoriesForCategory/${id}`);
  }
  findSCategoryById(id: any) : Observable<SCategory>{
    return this.http.get<SCategory>(`http://localhost:8080/api/findSCategoryById/${id}`);
  }
  deleteSCategory(id: any): Observable<SCategory> {
    return this.http.delete<SCategory>(`http://localhost:8080/api/deleteSCategory/${id}`);
  }
 
}
