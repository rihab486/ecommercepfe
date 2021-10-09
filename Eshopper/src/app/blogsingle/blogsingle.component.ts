import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/Cart.model';
import { Comment, Product, ProductOrder, ReplayComment, UpdateProduct, User } from '../models/model';
import { ReplayCommentComponent } from '../replay-comment/replay-comment.component';
import { CartService } from '../Services/cart.service';
import { CommentsService } from '../Services/comments.service';
import { ProductService } from '../Services/product.service';
import { ReplayCommentService } from '../Services/replay-comment.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-blogsingle',
  templateUrl: './blogsingle.component.html',
  styleUrls: ['./blogsingle.component.css']
})
export class BlogsingleComponent implements OnInit {
  productOrders: ProductOrder[] = [];
  productOrder: ProductOrder[] = [];
  product: UpdateProduct;
  products: Product[] = [];
  idProduct: any;
  comments: Comment[];
  replaycomments: ReplayComment[];
  comment: Comment = {} as Comment;
  id: any
  roles: string[] = [];
  carts: Cart[];
  isLoggedIn: any;
  idComment: any;
  constructor(private cartService: CartService, private replaycommentservice: ReplayCommentService, private router: Router, private dialog: MatDialog, private tokenStorage: TokenStorageService, private productservice: ProductService,
    private commentservice: CommentsService, private token: TokenStorageService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        this.idComment = this.route.snapshot.params.idComment;
      })}
  ngOnInit(): void {
    this.isLoggedIn = false
    this.sangleProduct();
    this.commentservice.findCommentsForProduct(this.idProduct).subscribe((comments: Comment[]) => {
      this.comments = comments;
      for (let i = 0; i < this.comments.length; i++)
        this.replaycommentservice.findReplayCommentsForComment(this.comments[i].id).subscribe(replaycomment => {
          this.replaycomments = replaycomment;
        });
    });
  }
  sangleProduct() {
    this.product = new UpdateProduct();
    this.idProduct = this.route.snapshot.params.idProduct;
    this.productservice.findProductById(this.idProduct).subscribe((products: any) => {
      this.products = products;
      this.productOrders.push(new ProductOrder(products, 1,));
    });
  }
  replay(idComment: any) {
    this.dialog.open(ReplayCommentComponent, { data: { idComment } })
  }
  addComment(idProduct: any) {
    this.commentservice.addCommentToProduct(this.comment, idProduct).subscribe(
      (comment) => {
        this.comment = this.comment;
        window.location.reload();
      })
  }
}
