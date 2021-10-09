import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
// Firebase
// Firebase modules
import "firebase/firestore";
import "firebase/auth";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
//uploadimage
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoginComponent } from './Admin/login/login.component';
import { FooterComponent } from './Admin/footer/footer.component';
import { NavbarComponent } from './Admin/navbar/navbar.component';
import { AccountComponent } from './Admin/account/account.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductComponent } from './Admin/product/product.component';
import { CategoryComponent } from './Admin/category/category.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListProductComponent } from './Admin/list-product/list-product.component';
import { DetailProductComponent } from './Admin/detail-product/detail-product.component';
import { Err404Component } from './Admin/err404/err404.component';
import { ContactUsComponent } from './Admin/contact-us/contact-us.component';
import { authInterceptorProviders } from './helper/auth.interceptor';
import { ProductsComponent } from './Admin/products/products.component';
import { CartComponent } from './cart/cart.component';
import { AddtagComponent } from './Admin/addtag/addtag.component';
import { CategoriesComponent } from './Admin/categories/categories.component';
import { MatRadioModule } from '@angular/material/radio';
import { BlogComponent } from './Admin/blog/blog.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AccountUserComponent } from './account-user/account-user.component';
import { BlogsingleComponent } from './blogsingle/blogsingle.component';
import { ReplayCommentComponent } from './replay-comment/replay-comment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddscategoryComponent } from './Admin/addscategory/addscategory.component';
import { AccountLivreurComponent } from './account-livreur/account-livreur.component';
import { ReplayreclamationComponent } from './replayreclamation/replayreclamation.component';
import { AddImageColorComponent } from './Admin/add-image-color/add-image-color.component';
import { AddtagtoproductComponent } from './Admin/addtagtoproduct/addtagtoproduct.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatSelectModule } from '@angular/material/select';
import { AddTaillesComponent } from './Admin/add-tailles/add-tailles.component';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { ToastrModule } from 'ngx-toastr';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCouleursComponent } from './Admin/add-couleurs/add-couleurs.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    AccountComponent,
    ProductComponent,
    CategoryComponent,
    ListProductComponent,
    DetailProductComponent,
    Err404Component,
    ContactUsComponent,
    ProductsComponent,
    CartComponent,
    AddtagComponent,
    CategoriesComponent,
    BlogComponent,
    DashboardComponent,
    AccountUserComponent,
    BlogsingleComponent,
    ReplayCommentComponent,
    CheckoutComponent,
    AddscategoryComponent,
    AccountLivreurComponent,
    ReplayreclamationComponent,
    AddImageColorComponent,
    AddtagtoproductComponent,
    AddTaillesComponent,
    AddCouleursComponent],
  imports: [
    NgbPaginationModule, NgbAlertModule,
    MatRadioModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    MatSelectModule,
    ColorPickerModule,
    BrowserModule,
    MatInputModule,
    NoopAnimationsModule,
    RouterModule,
    NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    RouterModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBOOxcF2tFLdK3O0m2kyNxs_ZBGM-g3KAA",
      authDomain: "eshopper-f1e90.firebaseapp.com",
      projectId: "eshopper-f1e90",
      storageBucket: "eshopper-f1e90.appspot.com",
      messagingSenderId: "763398719839",
      appId: "1:763398719839:web:12154f0073cd1d0ad94eea"
    })
  ], exports: [ProductsComponent, CategoriesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
