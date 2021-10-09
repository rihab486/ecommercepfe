import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tailles } from 'src/app/models/model';
import { TaillesServiceService } from 'src/app/Services/tailles-service.service';

@Component({
  selector: 'app-add-tailles',
  templateUrl: './add-tailles.component.html',
  styleUrls: ['./add-tailles.component.css']
})
export class AddTaillesComponent implements OnInit {
  progressBar = false;
  taille: Tailles = {} as Tailles;
  myForm !: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private taillesservice: TaillesServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {
    let formcontrols = {
      name: new FormControl('',[
        Validators.required
      ])
    }
    this.myForm=this.fb.group(formcontrols);
  }
  get u(){
    return this.myForm.get('name');}
  addtaille(){
    this.progressBar = true;
  if (this.data.idTaille != null) {
    this.taillesservice.editTailles(this.taille, this.data.idTaille).subscribe(taille => {
          this.taille = taille;
          window.location.reload();
    })
  } 
  else {
    this.taillesservice.addTaillesToProduct(this.taille, this.data.idProduct).subscribe(taille => {
         this.taille = taille;
        //  console.log(this.taille)
         window.location.reload();
    })
  }

  }

}
