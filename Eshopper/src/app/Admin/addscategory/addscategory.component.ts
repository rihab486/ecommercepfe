import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SCategory } from 'src/app/models/model';
import { SCategoryService } from 'src/app/Services/scategory.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-addscategory',
  templateUrl: './addscategory.component.html',
  styleUrls: ['./addscategory.component.css']
})
export class AddscategoryComponent implements OnInit {
  scategory: SCategory = {} as SCategory ;
  progressBar = false;
    myForm !: FormGroup;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,private scategoryService: SCategoryService
    ,private fb:FormBuilder) { }
    ngOnInit(): void {

      this.scategory = new SCategory();

      let formcontrols = {
        name: new FormControl('',[
          Validators.required
        ])
      }
      this.myForm=this.fb.group(formcontrols);
    }
    get u(){
      return this.myForm.get('name');}
  addCategory(){
  
    this.progressBar = true;
    if (this.data.idSCategory != null) {
      this.scategoryService.editSCategory(this.scategory, this.data.idSCategory).subscribe(scategory => {
            this.scategory = scategory;
            window.location.reload();
      })
    } 
    else {
      this.scategoryService.addSCategoryToCategory(this.scategory, this.data.idCategory).subscribe(scategory => {
           this.scategory = scategory;
          //  console.log(this.scategory)
           window.location.reload();
      })
    }}
}
