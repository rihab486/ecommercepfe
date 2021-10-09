import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import {   Product } from 'src/app/models/model';
import { finalize } from "rxjs/operators";
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/Services/product.service';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  product!: Product;
  progressBar = false;
downloadURL!: Observable<string>;
selectedFile!: File;
fb = "";
basePath = '/Product/';
value : boolean = false;
constructor(private productservice : ProductService , private storage: AngularFireStorage,
  public afs: AngularFirestore,
  @Inject(MAT_DIALOG_DATA) public data: any 
  ) { }
  ngOnInit(): void {
this.product = new Product();
  }
  vall(){
    this.value= true 
  }
  vale(){
    this.value = false;
  }
  ajout(){ 
    this.progressBar = true;
 //   this.product.datecmd = Date()
    this.product.url=this.fb;
    this.product.verif= this.value

    // console.log(this.product)
    let pr = Object.assign({},this.product); 
    // console.log(pr);
    if (this.data.idProduct != null) {
      this.productservice.editProduct(pr, this.data.idProduct).subscribe(product => {
        pr = product;
        // console.log(pr)
        window.location.reload();
      });
    } else {
      window.alert("formulaire valide")
      this.productservice.addProductToSCategory(pr, this.data.idSCategory).subscribe(product => {
        pr = product;
        // console.log(pr);
        window.location.reload();

      });
    } 
    
  }
  onFileSelected(event:any){
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `${this.basePath}/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task
    .snapshotChanges()
    .pipe(
      finalize(()=>{
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe((url)=>
        {
          if (url) {
            this.fb = url;
          }
          // console.log(this.fb);
        });
      })
    )
    .subscribe((url)=>{
      if (url) {
        // console.log(url);
      }
    });
  }

 
}
