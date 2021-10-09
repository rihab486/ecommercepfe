import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Couleurs } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class CouleursService {


  constructor(private http: HttpClient) { }
  editCouleurs(couleur: Couleurs, idCouleur: any): Observable<Couleurs> {
    return this.http.put<Couleurs>(`http://localhost:8080/api/editCouleurs/${idCouleur}`, couleur);
  }
  addCouleursToProduct(couleur: Couleurs, idProduct: any): Observable<Couleurs> {
    return this.http.post<Couleurs>(`http://localhost:8080/api/addCouleursToProduct/${idProduct}`, couleur);
  }

  findCouleursForProduct(idProduct: number): Observable<Couleurs[]> {
    return this.http.get<Couleurs[]>(`http://localhost:8080/api/findCouleursForProduct/${idProduct}`);
  }
  findAllCouleurs(): Observable<Couleurs[]> {
    return this.http.get<Couleurs[]>(`http://localhost:8080/api/findAllCouleurs`);
  }
  deleteCouleurs(id: number): Observable<Couleurs> {
    return this.http.delete<Couleurs>(`http://localhost:8080/api/deleteCouleurs/${id}`);
  }

}
