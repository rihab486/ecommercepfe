import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from 'src/app/models/model';
import { ReclamationsService } from 'src/app/Services/reclamations.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  signupForm!: FormGroup;
  reclamation: Reclamation = {} as Reclamation;
  currentUser: any;
  roles: string[] = [];
  idUser: any;
  isLoggedIn: any;
  id: any
  username: any;


  constructor(private rout: Router, private reclamationservice: ReclamationsService, private route: ActivatedRoute,
    private tokenStorage: TokenStorageService, private fb: FormBuilder) {
    let formControls = {
      name: new FormControl(
        '', [Validators.required]
      ),
      prenom: new FormControl(
        '', [Validators.required]
      ),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      phone: new FormControl(
        '', [Validators.required]
      ),

      adresse: new FormControl(
        '', [Validators.required]
      ),
      ville: new FormControl(
        '', [Validators.required]
      ),

      codepostal: new FormControl(
        '', [Validators.required]
      ),
      message: new FormControl(
        '', [Validators.required]
      )
    }
    this.signupForm = this.fb.group(formControls)
  }
  get email() { return this.signupForm.get('email') }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.currentUser = this.tokenStorage.getUser()

  }

  addRecl(idUser: any, username: any) {
    this.reclamation.addedby = username;
    if (this.isLoggedIn == this.roles.includes('ROLE_CLIENT')) {
      this.currentUser = this.tokenStorage.getUser();
      idUser = this.currentUser.id
      this.reclamationservice.addReclamationToUser(this.reclamation, idUser).subscribe(
        (reclamation) => {
          this.isLoggedIn = true;
          this.reclamation = this.reclamation;
          console.log(this.reclamation)
          this.rout.navigate(['/accountu', idUser])

        })
    }


  }
}
