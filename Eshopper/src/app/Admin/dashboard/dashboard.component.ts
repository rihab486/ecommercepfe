import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageColor, Product, ProductOrder, Tag } from 'src/app/models/model';
import { ImagecolorServiceService } from 'src/app/Services/imagecolor-service.service';
import { ProductService } from 'src/app/Services/product.service';
import { TagService } from 'src/app/Services/tag.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  prodOrder: ProductOrder[] = [];
  tags: Tag[] = [];
  idTag: any
  showSearch = false
  name: any
  products: Product[] = [];
  productOrders: ProductOrder[] = [];
  images: any
  idProduct: any
  galery: ImageColor[] = [];
  idimagec: any


  constructor(private imagecservice: ImagecolorServiceService,
    private productService: ProductService, private route: ActivatedRoute, private tagService: TagService, private router: Router) { }
  ngOnInit(): void {

    this.loadProducts();
    this.tagService.findAllTags().subscribe(tags => {
      this.tags = tags;
    })
  }

  loadProducts() {

    this.productService.findAllProducts().subscribe(
      (products: any[]) => {
        this.products = products;
        for (let i = 0; i < 3; i++) {
          this.prodOrder.push(new ProductOrder(products[i], 0))
        //  this.idProduct = this.products[i].id
          this.imagecservice.findAllImageColor().subscribe((color: any) => {
            this.galery = color;
          })
        }
      })

  }
  sngleProduct(idProduct: any) {
    this.router.navigate(['detailproduct', idProduct]);
  }

  search() {

    this.productService.findByName(this.name).subscribe((products) => {
      this.products = products;
      this.showSearch = true;
      // console.log(this.products)
    });
  }
}
