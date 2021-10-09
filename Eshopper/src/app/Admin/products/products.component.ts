import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Category, Product, ProductOrder } from 'src/app/models/model';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  name: any;
  showSearch = false;
  
  productOrders: ProductOrder[] = [];
  products: Product[] = [];
  selectedProductOrder!: ProductOrder;
  productSelected = false;
  description: string = '';
  showMyContainerInfo = false;
  showBtn = -1;
  currentUser: any;

  isLoggedIn:any;
  categories!: Category[] ;
  constructor(private categoryservice:CategoryService,private tokenStorageService: TokenStorageService,
     private router: Router, private dialog: MatDialog,
    private productService: ProductService, private userService: UserService)
     {
      
      }

  ngOnInit(): void {
    //getallcategory
    this.categoryservice.findAllCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
    this.productOrders = [];
    this.loadProducts();
  
    this.isLoggedIn = this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.currentUser = this.tokenStorageService.getUser();
     
    }

  }
 //allproducts
  loadProducts() {
    this.productService.findAllProducts().subscribe(
      (products: any[]) => {
        this.products = products;
        this.products.forEach(product => {
          this.productOrders.push(new ProductOrder(product, 0));
        })
      }
    );
  }
  
 /* productInfo(id: number) {
    this.productService.findProductById(id).subscribe(data => {
      this.description = data.description;
      // console.log(this.description);
    });
    this.showMyContainerInfo = !this.showMyContainerInfo;
  }*/

 showUndoBtn(index: number) {
    this.showBtn = index;
  }
  addToCart(order: ProductOrder,idUser: any) 
   {}

  sngleProduct(idProduct: any) {
    this.router.navigate(['detailproduct', idProduct]);
  }
  displayscategory(idSCategory :number){
    this.router.navigate(['/listproduct',idSCategory])
  }
  search(){
    this.productService.findByName(this.name).subscribe((products) => {
      this.products = products;
      this.showSearch = true;
    });
  }
  
}
