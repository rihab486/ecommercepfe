import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment, Product, ProductOrder, ProductOrders, UpdateProduct, Tag, ERole, ImageColor, Tailles, Couleurs } from 'src/app/models/model';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { CommentsService } from 'src/app/Services/comments.service';
import { TagService } from 'src/app/Services/tag.service';
import { ImagecolorServiceService } from 'src/app/Services/imagecolor-service.service';
import { TaillesServiceService } from 'src/app/Services/tailles-service.service';
import { ToastrService } from 'ngx-toastr';
import { isConstructorDeclaration } from 'typescript';
import { Cart } from 'src/app/models/Cart.model';
import { CouleursService } from 'src/app/Services/couleurs.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})

export class DetailProductComponent implements OnInit {
  cart: Cart = {} as Cart;
  productOrders: ProductOrder[] = [];
  tailles: Tailles[] = [];
  couleurs: Couleurs[] = [];
  productOrder: ProductOrder[] = [];
  galery: ImageColor[] = [];
  products: Product[] = [];
  currentUser: any;
  submitted = false
  selectedProductOrder!: ProductOrder;
  productSelected: boolean = false;
  idProduct!: number;
  idTag: any;
  idimagec: any;
  product!: UpdateProduct;
  isLoggedIn: any;
  name: any
  roles: string[] = [];
  tags: Tag[] = [];
  comment: Comment = {} as Comment;
  tag: Tag = {} as Tag;
  comments!: Comment[];
  stock !: boolean
  ROLE_ADMIN !: ERole;
  ROLE_CLIENT !: ERole;
  value!: Tailles;
  stocks!: number;
  col: any
  id: any
  src: any
  currenttai: any
  nouveleq !: number;
  img: any;
  prodOrder: ProductOrder[] = [];
  isLogged: any;
  quantitytotal: any

  constructor(private router: Router, private couleurservice: CouleursService, private tokenStorage: TokenStorageService, private route: ActivatedRoute,
    private productservice: ProductService, private imagecservice: ImagecolorServiceService,
    private commentservice: CommentsService, private tailleservice: TaillesServiceService,
    private tagservice: TagService, private cartService: CartService,
    private toastr: ToastrService) {
    this.nouveleq = 0;
  }
  ngOnInit() {
    this.loadgaleries();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      ///this.isLogged = true
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.currentUser = this.tokenStorage.getUser()
    this.sangleProduct();
  }
  private sangleProduct() {
    this.product = new UpdateProduct();
    this.idProduct = this.route.snapshot.params.idProduct;
    this.productservice.findProductById(this.idProduct).subscribe((products: any) => {
      this.products = products;
      this.productOrders.push(new ProductOrder(products, 1));
      this.tailleservice.findTaillesForProduct(this.idProduct).subscribe((taille: any) => {
        this.tailles = taille
      })
      this.imagecservice.findImageColorsForProduct(this.idProduct).subscribe((img: any) => {
        this.galery = img
      })
      this.couleurservice.findCouleursForProduct(this.idProduct).subscribe((color: any) => {
        this.couleurs = color;
      })
    })
    this.submitted = true;
    this.idProduct = this.route.snapshot.params.idProduct;
    this.commentservice.findCommentsForProduct(this.idProduct).subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }
  loadgaleries() {
    this.productservice.findAllProducts().subscribe(
      (products: any[]) => {
        this.products = products;

      })
  }
  selectedValue(event: any, order: ProductOrder) {
    const id = event.value;
    order.taille = id;
  }
  selectedValueC(event: any, order: ProductOrder) {
    const id = event.value;
    order.color = id;
  }
  addToCart(order: ProductOrder, idUser: any) {
    this.cart.addedby = this.currentUser.username;
    this.cart.name = order.product.name;
    this.cart.price = order.product.price;
    this.cart.datecmd = order.product.datecmd;
    this.cart.url = order.product.url;
    this.cart.marque = order.product.marque;
    this.cart.quantity = order.quantity;
    this.cart.description = order.product.description;
    this.cart.taille = order.taille
    this.cart.couleur = order.color
    this.cart.stock = order.product.quantities - order.quantity;
    this.cart.tailles = "";

    for (var i = 0; i < this.tailles.length; i++)
      this.cart.tailles += this.tailles[i].name;

    this.cart.couleurs = "";

    for (var i = 0; i < this.couleurs.length; i++)
      this.cart.couleurs += this.couleurs[i].name + "";

    order.product.quantities = order.product.quantities - order.quantity;
    this.id = order.product.id
    this.productservice.editProduct(order.product, this.id).subscribe((prod: any) => {
      this.products = prod;
    })
    if (this.isLoggedIn == this.roles.includes('ROLE_CLIENT')) {
      if (confirm("Vous étes sur de commander cet produit")) {
        this.cartService.addCartToUser(this.cart, idUser).subscribe(cart => {
          this.isLoggedIn = true;
          this.cart = cart;
          window.location.reload()
        })
      }
    }



  }
  search() { }

  addComment(idProduct: any, username: any) {
    this.comment.addedBy = username
    if (this.isLoggedIn == this.roles.includes('ROLE_CLIENT')) {
      this.currentUser = this.tokenStorage.getUser();
      this.commentservice.addCommentToProduct(this.comment, idProduct).subscribe(
        (comment) => {
          this.isLoggedIn = true;
          this.comment = this.comment;
          window.location.reload();
        })

    }

  }

  login() {
    this.router.navigate(['/login'])

  }

}
