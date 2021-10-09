import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from '../models/Cart.model';
import { ImageColor, Order, Product, ProductOrder, ProductOrders, Tailles } from '../models/model';
import { CartService } from '../Services/cart.service';
import { OrderService } from '../Services/order.service';
import { ProductService } from '../Services/product.service';
import { TaillesServiceService } from '../Services/tailles-service.service';
import { TokenStorageService } from '../Services/token-storage.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  form: FormGroup;
  productorder: any;

  currentUser: any;
  cartToEdit: Cart;
  carts!: Cart[];
  cartLength = 0;
  total!: number;
  sub!: Subscription;
  idCart: any;
  products: Product[] = [];
  cartss: Cart[];
  catcurrent: any;
  idProduct: any
  id: any
  couleur: ImageColor[] = [];
  tailles: Tailles[];
  productOrders: ProductOrder[] = [];
  productorders: ProductOrder[] = [];

  constructor(private tailleservice: TaillesServiceService, private productservice: ProductService, private token: TokenStorageService, private route: Router,
    private cartService: CartService, private router: ActivatedRoute, private formBuilder: FormBuilder) {
    this.total = 0;
    this.form = this.formBuilder.group({
      productorder: ['']
    });
    this.productorder = this.getproductorders();
  }
  getproductorders() {
    return [

    ];

  }
  submit() { }
  selectTable(couleurs: any) {
    if (couleurs)
      return couleurs.split() || ""

  }
  getTable(tailles: any) {
    //console.log("tailles.split()", tailles.split(" "))
    if (tailles)
      return tailles.split("") || ""
  }

  ngOnInit(): void {

    this.currentUser = this.token.getUser();
    this.cartService.findCartsForUser(this.currentUser.id).subscribe(carts => {
      this.carts = carts;
      for (let i = 0; i < this.productorders.length; i++) {
        this.idProduct = this.productorders[0].product.id
        console.log("idproduct", this.idProduct)
        this.tailleservice.findTaillesForProduct(this.idProduct).subscribe((taille: any) => {
          this.productorders = taille
        })
      }

      this.cartLength = this.carts.length;
      this.calculateTotal();
    });
  }
  update(cart: any, id: any) {
    for (let i = 0; i < this.carts.length; i++) {
      this.carts[i].id
      this.idCart = this.carts[i].id
      id = this.idCart
      // console.log("affected id cart", id)
      cart.taille = this.carts[i].taille
      cart.quantity = this.carts[i].quantity
      //  cart.couleur = this.carts[i].couleur
      this.cartService.editCart(cart, id).subscribe(carts => {
        carts = carts
        //window.location.reload()
      })
    }
  }
  selectedColor(event: any, cart: Cart) {
    const id = event.value;
    for (let i = 0; i < this.carts.length; i++) {
      if (cart.id == this.carts[i].id)
        this.carts[i].couleur = id
      console.log("couleur id")
    };
  }
  selectedValue(event: any, cart: Cart) {
    const id = event.value
    for (let i = 0; i < this.carts.length; i++) {
      if (cart.id == this.carts[i].id)
        this.carts[i].taille = id

      console.log("taille id")

    };
    // console.log(cart.taille)
  }
  calculateTotal() {
    let sum = 0;
    this.carts.forEach((value) => {
      sum += value.price * value.quantity;

    });
    this.total = sum;
  }

  check() {
    this.route.navigate(['/checkout'])
  }

  deleteCart(idPro: number, idUser: number) {
    if (confirm('Are you sur')) {
      this.cartService.removeFromCart(idPro, idUser).subscribe(() => {
        window.location.reload();
      })
    }
  }
}
