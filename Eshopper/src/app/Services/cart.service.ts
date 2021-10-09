import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/Cart.model';
const NAME_KEY = 'NAME';

@Injectable({
  providedIn: 'root'
})

export class CartService {
 
 
  constructor(public http : HttpClient) { }

  findAllCarts() : Observable<Cart[]>{
    return this.http.get<Cart[]>(`http://localhost:8080/api/findAllCarts`);
  }
  addCartToUser(cart: Cart, idUser: any): Observable<Cart> {
    return this.http.post<Cart>(`http://localhost:8080/api/addCartToUser/${idUser}`, cart);
  }
  findCartsForUser(idUser: any): Observable<Cart[]> {
    return this.http.get<Cart[]>(`http://localhost:8080/api/findCartsForUser/${idUser}`);
  }
  removeFromCart(idCart: any, idUser: any): Observable<Cart> {
    return this.http.delete<Cart>(`http://localhost:8080/api/removeFromCart/${idCart}/${idUser}`);
  }
  findCartById(id: any) : Observable<Cart> {
    return this.http.get<Cart>(`http://localhost:8080/api/findCartById/${id}`);
  }
  editCart(cart: Cart, id: number): Observable<Cart[]> {
    return this.http.put<Cart[]>(`http://localhost:8080/api/editCart/${id}`, cart);
  }


 
  saveCartName(name: string) {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }

 
}

