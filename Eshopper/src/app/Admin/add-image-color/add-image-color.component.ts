import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";

import { ImageColor } from 'src/app/models/model';
import { ImagecolorServiceService } from 'src/app/Services/imagecolor-service.service';

@Component({
  selector: 'app-add-image-color',
  templateUrl: './add-image-color.component.html',
  styleUrls: ['./add-image-color.component.css']
})
export class AddImageColorComponent implements OnInit {
  image!: ImageColor;
  progressBar = false;
  myForm !: FormGroup;
downloadURL!: Observable<string>;
couleur: ImageColor = {} as ImageColor;
selectedFile!: File;
fb = "";
basePath = '/image/';
  constructor(private imageservice : ImagecolorServiceService , private storage: AngularFireStorage,
    public afs: AngularFirestore,@Inject(MAT_DIALOG_DATA) public data: any ) 
    { }
  ngOnInit(): void {
    this.image = new ImageColor();
  }
ajout(){
  this.progressBar= true
  this.image.url=this.fb;
  let pr = Object.assign({},this.image);{
    this.imageservice.addImageColorToProduct(pr,this.data.idProduct).subscribe(prod =>{
      pr= prod 
      // console.log("color image",this.image)
     window.location.reload()


    })

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
