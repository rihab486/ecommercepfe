import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
 
   private dbPath = '/Product';
  tutorialsRef!: AngularFirestoreCollection<Product>;

  constructor(private http: HttpClient,private firestore: AngularFirestore) {
         } 
  addProductToSCategory(pr: Product, idCategory: any): Observable<Product> {
    return this.http.post<Product>(`http://localhost:8080/api/addProductToSCategory/${idCategory}`, pr);
  }
  editProduct(product: Product, id: number): Observable<Product> {
    return this.http.put<Product>(`http://localhost:8080/api/editProduct/${id}`, product);
  }
  findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8080/api/findAllProducts`);
  }
  findProductsForSCategory(id: any) : Observable<Product[]>  {
    return this.http.get<Product[]>(`http://localhost:8080/api/findProductsForSCategory/${id}`);
  }
  findProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/api/findProductById/${id}`);
  }
   findByName(name: any): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8080/api/findByName/${name}`);
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`http://localhost:8080/api/deleteProduct/${id}`);
  }
 
  }
 

  
 


