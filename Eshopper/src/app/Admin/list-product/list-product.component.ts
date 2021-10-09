import { Component, OnInit } from '@angular/core';
import { Category, Product, ProductOrder, SCategory } from 'src/app/models/model';
import { ProductService } from 'src/app/Services/product.service';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DetailProductComponent } from '../detail-product/detail-product.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { CategoryService } from 'src/app/Services/category.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { SCategoryService } from 'src/app/Services/scategory.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  showSearch = false
  categories!: Category[] ;
  scategories!: SCategory[] ;
  idSCategory : any ; 
  productOrders: ProductOrder[] = [];
  idCategory!: number;
  products: Product[] = [];
  product: Product = {} as Product;
  category: Category = {} as Category;
  scategory : SCategory = {} as SCategory;
  showBtn = -1;
 name : any
  constructor(private productService : ProductService,private scategorieservice : SCategoryService,private tokenStorage:TokenStorageService,private route: ActivatedRoute,private categoryService: CategoryService,private productservice: ProductService
  ,private router:Router) 
  {
    this.route.params.subscribe(
    params => { 
          this.idSCategory = this.route.snapshot.params.idSCategory;
          this.productService.findProductsForSCategory(this.idSCategory).subscribe(productt => {
           this.products = productt;
          // console.log("products",this.products)
         });
      })}
    productInfo(id: number) {
       this.productservice.findProductById(id).subscribe(products => {
       this.product = products;
    });
    
  }
  ngOnInit(): void {
  
    this.categoryService.findAllCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
      // console.log("all categorie",this.categories) 
    });
    this.productOrders = [];
  }
 

  search(){
    
   /* this.productService.findByName(this.name).subscribe((products) => {
      this.products = products;
      this.showSearch = true;
    // console.log(this.products)
    });*/
  }
  sangleproduct(idProduct:any){
        this.router.navigate(['/detailproduct',idProduct])
  }
   displayscategory( idSCategory: number){
   this.router.navigate(['/listproduct',idSCategory])
  }

}
