import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Couleurs } from 'src/app/models/model';
import { CouleursService } from 'src/app/Services/couleurs.service';

@Component({
  selector: 'app-add-couleurs',
  templateUrl: './add-couleurs.component.html',
  styleUrls: ['./add-couleurs.component.css']
})
export class AddCouleursComponent implements OnInit {
  progressBar = false;
  couleur: Couleurs = {} as Couleurs;
  myForm !: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private couleurservice: CouleursService, private fb: FormBuilder) { }

  ngOnInit(): void {
    let formcontrols = {
      name: new FormControl('', [
        Validators.required
      ])
    }
    this.myForm = this.fb.group(formcontrols);
  }
  get u() {
    return this.myForm.get('name');
  }
  addcouleur() {
    this.progressBar = true;
    if (this.data.idCouleur != null) {
      this.couleurservice.editCouleurs(this.couleur, this.data.idCouleur).subscribe((couleur: any) => {
        this.couleur = couleur;
        window.location.reload();
      })
    }
    else {
      this.couleurservice.addCouleursToProduct(this.couleur, this.data.idProduct).subscribe((couleur: any) => {
        this.couleur = couleur;
        //  console.log(this.taille)
        window.location.reload();
      })
    }

  }

}
