import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageColor, Product } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ImagecolorServiceService {




  constructor(private http: HttpClient) { }
  findAllImageColor(): Observable<ImageColor[]> {
    return this.http.get<ImageColor[]>(`http://localhost:8080/api/findAllImageColor`);
  }
  addImageColorToProduct(pr: ImageColor, idProduct: any): Observable<ImageColor> {
    return this.http.post<ImageColor>(`http://localhost:8080/api/addImageColorToProduct/${idProduct}`, pr);
  }
  findImageColorsForProduct(idProduct: number): Observable<ImageColor[]> {
    return this.http.get<ImageColor[]>(`http://localhost:8080/api/findImageColorsForProduct/${idProduct}`);
  }
  findProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/api/findProductById/${id}`);
  }
  findImageColorById(id: any): Observable<ImageColor> {
    return this.http.get<ImageColor>(`http://localhost:8080/api/findImageColorById/${id}`);
  }
  editImageColor(imagecolor: any, id: any): Observable<ImageColor> {
    return this.http.put<ImageColor>(`http://localhost:8080/api/editImageColor/${id}`, imagecolor);
  }




}
