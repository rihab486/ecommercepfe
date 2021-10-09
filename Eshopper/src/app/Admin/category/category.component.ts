import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/models/model';
import { CategoryService } from 'src/app/Services/category.service';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  category: Category = {} as Category ;
  progressBar = false;
    myForm !: FormGroup;

  constructor(private tokenStorage:TokenStorageService,@Inject(MAT_DIALOG_DATA) public data: any,private categoryService: CategoryService
  ,private fb:FormBuilder) { }
  ngOnInit(): void {
    const data = this.tokenStorage.getUser();
 
   
    let formcontrols = {
      name: new FormControl('',[
        Validators.required
      ])
    }
    this.myForm=this.fb.group(formcontrols);
  }

addCategory(){

  this.progressBar = true;
  if (this.data.idCategory != null) {
    this.categoryService.editCategory(this.category, this.data.idCategory).subscribe(category => {
          this.category = category;
          window.location.reload();
    })
  } 
  else {
    this.categoryService.addCategoryToUser(this.category, this.data.idUser).subscribe(category => {
         this.category = category;
        //  console.log(this.category)
         window.location.reload();
    })
  }}
}
