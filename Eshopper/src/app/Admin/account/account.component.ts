import { Component, Inject, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoryComponent } from '../category/category.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { AddtagComponent } from '../addtag/addtag.component';
import { AddscategoryComponent } from '../addscategory/addscategory.component';
import { SCategoryService } from 'src/app/Services/scategory.service';
import { AuthUserService } from 'src/app/Services/auth-user.service';
import { Category, Product, SCategory, User } from 'src/app/models/model';
import { CartService } from 'src/app/Services/cart.service';
import { ProductComponent } from '../product/product.component';
import { TagService } from 'src/app/Services/tag.service';
import { Cart } from 'src/app/models/Cart.model';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  currentUser: any;
  categories: Category[] = [];
  cartLength = 0;
  private roles: string[] = [];
  idCategory: any
  isLoggedIn: any
  currentIndex = -1;
  name = '';
  users !: User[];
  carts!: Cart[];
  id: any
  //souscategorie: any = [[]];
  constructor(private souscategorieservice: SCategoryService, private cartService: CartService, private userservice: AuthUserService, private token: TokenStorageService,
    private route: ActivatedRoute, private dialog: MatDialog, private tagservice: TagService,
    private categoryService: CategoryService, private router: Router) {
    this.route.params.subscribe(
      params => {
        this.userservice.findAllUsers().subscribe(user => {
          this.users = user;
          // console.log(this.users)
        });

        this.categoryService.findAllCategories().subscribe(categories => {
          this.categories = categories;
          //  console.log(categories)


          /* for( let i = 0 ; i<this.categories.length ; i++){
            this.souscategorie.push(this.categories[i].souscategories) 
           }*/

        });
      })
  }
  ngOnInit(): void {

    this.currentUser = this.token.getUser();
    this.cartService.findAllCarts().subscribe(carts => {
      this.carts = carts;
      this.cartLength = this.carts.length;
      // console.log(this.carts)

    });

  }


  logout(): void {
    if (confirm('Vous étes Sur de  déconnecter votre compte')) {

      this.token.signOut();
      this.router.navigate(['/dashboarda'])
      //  window.location.reload();

    }
  }
  addCategory(idUser: any) {
    this.dialog.open(CategoryComponent, {
      data: { idUser }
    })
  }
  deleteuser(id: any) {
    if (confirm('Are you sure')) {
      this.userservice.deleteuser(id).subscribe(() => {
        window.location.reload();
      })
    }

  }
  editCategory(idCategory: any) {
    this.dialog.open(CategoryComponent, {
      data: { idCategory }
    })

  }
  deleteCategory(id: any) {
    if (confirm('Vous etes sur de supprimer catégorie')) {
      this.categoryService.deleteCategory(id).subscribe(() => {
        window.location.reload();
      })
    }

  }
  editSCategory(idSCategory: any) {
    this.dialog.open(AddscategoryComponent, {
      data: { idSCategory }
    })
  }
  deleteSCategory(idSCategory: any) {
    if (confirm("Are you sure")) {
      this.souscategorieservice.deleteSCategory(idSCategory).subscribe(() => {
        window.location.reload()
      })
    }
  }

  addTag() {
    this.dialog.open(AddtagComponent);
  }
  deleteTag(id: any) {
    if (confirm("Are you sure")) {
      this.tagservice.deleteTag(id).subscribe(() => {
        window.location.reload()
      })
    }

  }
  deleteCart(idPro: any, idUser: any) {
    if (confirm('Are you sure')) {
      this.cartService.removeFromCart(idPro, idUser).subscribe(() => {
        window.location.reload();
      })
    }

  }
  addProduct(idSCategory: number) {

    this.dialog.open(ProductComponent, { data: { idSCategory } })

  }
  addImage() {

  }
  addSCategory(idCategory: any) {
    this.dialog.open(AddscategoryComponent, { data: { idCategory } })

  }



}










