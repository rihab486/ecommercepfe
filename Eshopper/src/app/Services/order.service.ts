import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductOrder, ProductOrders } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: ProductOrders = new ProductOrders();
  private productOrder!: ProductOrder;
  private total!: number;
  private productOrderSubject = new Subject();
  private ordersSubject = new Subject();
  private totalSubject = new Subject();
  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();

  constructor() { }




}
