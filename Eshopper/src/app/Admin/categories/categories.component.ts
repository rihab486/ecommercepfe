import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Category, Comment, ImageColor, Product, SCategory, Tag, Tailles, User } from 'src/app/models/model';
import { CategoryService } from 'src/app/Services/category.service';
import { CommentsService } from 'src/app/Services/comments.service';
import { CouleursService } from 'src/app/Services/couleurs.service';
import { ImagecolorServiceService } from 'src/app/Services/imagecolor-service.service';
import { ProductService } from 'src/app/Services/product.service';
import { SCategoryService } from 'src/app/Services/scategory.service';
import { TagService } from 'src/app/Services/tag.service';
import { TaillesServiceService } from 'src/app/Services/tailles-service.service';
import { UserService } from 'src/app/Services/user.service';
import { AddCouleursComponent } from '../add-couleurs/add-couleurs.component';
import { AddImageColorComponent } from '../add-image-color/add-image-color.component';
import { AddTaillesComponent } from '../add-tailles/add-tailles.component';
import { AddscategoryComponent } from '../addscategory/addscategory.component';
import { AddtagtoproductComponent } from '../addtagtoproduct/addtagtoproduct.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  idCategory: any;
  idSCategory: any
  idCouleurs: any
  prodd: Product = {} as Product;
  products!: Product[];
  scategory: SCategory = {} as SCategory;
  user: User = {} as User;
  panelOpenState!: boolean;
  tags!: Tag[];
  idProduct: any
  idTaille: any;
  comments!: Comment[];
  couleur!: ImageColor[];
  currentprod: any
  constructor(private couleuservice: CouleursService, private tailleservice: TaillesServiceService, private imagecservice: ImagecolorServiceService, private souscategorieservice: SCategoryService, private productService: ProductService, private categoryService: CategoryService,
    private route: ActivatedRoute, private dialog: MatDialog, private userService: UserService,
    private tagService: TagService, private commentService: CommentsService) {
    this.route.params.subscribe(
      params => {
        this.idSCategory = this.route.snapshot.params.idSCategory;
        this.souscategorieservice.findSCategoryById(this.idSCategory).subscribe(category => {
          this.scategory = category
          //    console.log( "sous categ par id", this.scategory)
          this.productService.findProductsForSCategory(this.idSCategory).subscribe((product: Product[]) => {
            this.products = product;
            //   console.log("products par scateg",this.products)  
            for (let i = 0; i < this.products.length; i++) {
              this.idProduct = this.products[i].id
              //  console.log("bbbbbbb",this.idProduct)
              this.imagecservice.findImageColorsForProduct(this.idProduct).subscribe((color: any) => {
                this.couleur = color;
              });

            }
          });
        })

        this.commentService.findAllComments().subscribe(comments => {
          this.comments = comments;
        })
      })
  }

  ngOnInit(): void {

  }

  addTag(idProduct: any) {
    // console.log("addtag",idProduct)
    this.dialog.open(AddtagtoproductComponent, { data: { idProduct } })


  }

  addImage(idProduct: number) {
    // console.log("id produ",idProduct)
    this.dialog.open(AddImageColorComponent, { data: { idProduct } })

  }
  addTailles(idProduct: number) {
    this.dialog.open(AddTaillesComponent, { data: { idProduct } })
  }
  addCouleurs(idProduct: number) {
    this.dialog.open(AddCouleursComponent, { data: { idProduct } })

  }
  showTags(idProduct: number) {
    this.tagService.findTagsForProduct(this.idProduct).subscribe(tags => {
      this.tags = tags;
    })
  }

  editSCategory(idSCategory: any) {
    this.dialog.open(AddscategoryComponent, {
      data: { idSCategory }
    })
  }
  deleteSCategory(idSCategory: any, idUser: any) {
    if (confirm("vs etes sur de supprimer le sous catégorie")) {
      this.souscategorieservice.deleteSCategory(idSCategory).subscribe(() => {
        window.location.reload()
      })
    }
  }
  deletetaille(idTaille: number, user: any) {
    if (confirm("vs etes sur de supprimer le taille")) {
      for (let i = 0; i < this.products.length; i++) {
       this.idTaille = this.products[0].id
        this.tailleservice.deletetaille(this.idTaille).subscribe(() => {
          window.location.reload()
        })

      }
    }
  }
  deletecouleur(idCouleurs: number, user: any) {
    if (confirm("vs etes sur de supprimer le couleur")) {
      for (let i = 0; i < this.products.length; i++) {
        this.idCouleurs = this.products[i].id
        this.couleuservice.deleteCouleurs(this.idCouleurs).subscribe(() => {
          window.location.reload()
        })

      }
    }
  }
  editProduct(idProduct: any) {
    this.dialog.open(ProductComponent, {
      data: { idProduct }
    })
  }
  deleteProduct(idProduct: any, idUser: any) {
    if (confirm("vs etes sur de supprimer le produit")) {
      this.productService.deleteProduct(idProduct).subscribe(() => {
        window.location.reload()

        // window.location.replace(`/account/${idUser}`)
      })
    }
  }
  deleteComment(id: any) {
    if (confirm("Are you sure")) {
      this.commentService.deleteComment(id).subscribe(() => {
        window.location.reload();
      })
    }
  }
  deleteTag(idTag: number, idProduct: number) {
    if (confirm("vous etes sur de supprimer tags")) {
      this.tagService.deleteTagFormProduct(idTag, idProduct).subscribe(() => {

        window.location.reload();
      })
    }
  }
}
