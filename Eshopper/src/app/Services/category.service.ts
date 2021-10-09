import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/model';
import  { HttpClient }  from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  removeFromAccount(idCategory: any) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private http: HttpClient) { }

  addCategoryToUser(category: Category, idUser: number): Observable<Category> {
    return this.http.post<Category>(`http://localhost:8080/api/addCategoryToUser/${idUser}`, category);
  }
  editCategory(category: Category, id: number): Observable<Category> {
    return this.http.put<Category>(`http://localhost:8080/api/editCategory/${id}`, category);
  }
  findCategoryById(id: any): Observable<Category> {
    return this.http.get<Category>(`http://localhost:8080/api/findCategoryById/${id}`);
  }
  findAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`http://localhost:8080/api/findAllCategories`);
  }
  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`http://localhost:8080/api/deleteCategory/${id}`);
  }

}
