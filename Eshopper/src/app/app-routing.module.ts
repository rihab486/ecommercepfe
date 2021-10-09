import { compileComponentFromMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLivreurComponent } from './account-livreur/account-livreur.component';
import { AccountUserComponent } from './account-user/account-user.component';
import { AccountComponent } from './Admin/account/account.component';
import { AddCouleursComponent } from './Admin/add-couleurs/add-couleurs.component';
import { AddImageColorComponent } from './Admin/add-image-color/add-image-color.component';
import { AddTaillesComponent } from './Admin/add-tailles/add-tailles.component';
import { BlogComponent } from './Admin/blog/blog.component';
import { CategoriesComponent } from './Admin/categories/categories.component';
import { CategoryComponent } from './Admin/category/category.component';
import { ContactUsComponent } from './Admin/contact-us/contact-us.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { DetailProductComponent } from './Admin/detail-product/detail-product.component';
import { Err404Component } from './Admin/err404/err404.component';
import { ListProductComponent } from './Admin/list-product/list-product.component';
import { LoginComponent } from './Admin/login/login.component';
import { ProductComponent } from './Admin/product/product.component';
import { ProductsComponent } from './Admin/products/products.component';
import { BlogsingleComponent } from './blogsingle/blogsingle.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReplayreclamationComponent } from './replayreclamation/replayreclamation.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboarda', pathMatch: 'full' },

  {
    path: 'dashboarda',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'Cart',
    component: CartComponent
  },
  {
    path: 'account/:id',
    component: AccountComponent,
    children: [
      {
        path: 'scategories/:idSCategory',
        component: CategoriesComponent,


      }
    ]
  },
  {
    path: 'category/:idCategory',
    component: CategoryComponent
  },

  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'accountu/:idu',
    component: AccountUserComponent
  }
  ,
  {
    path: 'accountl/:id',
    component: AccountLivreurComponent
  },
  {
    path: 'listproduct/:idSCategory',
    component: ListProductComponent,

  }, {
    path: 'products',
    component: ProductsComponent
  }
  ,
  {
    path: 'err',
    component: Err404Component
  },

  {
    path: 'contact/: idUser',
    component: ContactUsComponent
  },
  {
    path: 'detailproduct/:idProduct',
    component: DetailProductComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blogsingle/:idProduct',
    component: BlogsingleComponent
  },
  {
    path: 'replayr/:idComment',
    component: ReplayreclamationComponent
  },

  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'imagecolor/:id',
    component: AddImageColorComponent
  },
  {
    path: 'tailles/:id',
    component: AddTaillesComponent
  },
  {
    path: 'couleurs/:id',
    component: AddCouleursComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
