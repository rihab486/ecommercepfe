import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductOrder, Tailles } from 'src/app/models/model';
import { ProductService } from 'src/app/Services/product.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  products: Product[] = [];
  tailles: Tailles[] = [];

  productOrders: ProductOrder[] = [];
 

   constructor(private router : Router,private productService: ProductService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    
     
    
    this.loadProducts();
  }
 loadProducts() {
    this.productService.findAllProducts().subscribe(
      (products: any[]) => {
          this.products = products;
         
          for (let i =0 ; i <3; i++) {
            this.productOrders.push(new ProductOrder(products[i],0))
         }
      }
    );
  }
  sngleProduct(idProduct: any) {
    console.log("idproduct", idProduct)
    this.router.navigate(['blogsingle', idProduct]);
  }
  
}
