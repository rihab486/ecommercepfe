import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation, ReplayReclamation } from '../models/model';
import { ReplayreclamationService } from '../Services/replayreclamation.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-replayreclamation',
  templateUrl: './replayreclamation.component.html',
  styleUrls: ['./replayreclamation.component.css']
})
export class ReplayreclamationComponent implements OnInit {
  signupForm!: FormGroup;
  reclamation: ReplayReclamation = {} as ReplayReclamation;
  recl  : Reclamation ={ } as Reclamation;

  currentUser : any

  roles: string[] = [];
  idComment : any ;
  isLoggedIn: any;
  id : any
  username: any;


  constructor(private rout: Router,@Inject(MAT_DIALOG_DATA) public data: any,
    private replayreclamationservice:ReplayreclamationService ,private route: ActivatedRoute,
    private tokenStorage:TokenStorageService, private fb: FormBuilder) 
    {

    }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    
    this.currentUser = this.tokenStorage.getUser()
 
  }

  addRecl( username: any)
     {
       


        this.reclamation.addedby = username ;
    
        this.replayreclamationservice.addReplayReclamationToReclamation(this.reclamation,this.data.idComment).subscribe(
           reclamation  => {  
            this.reclamation = reclamation;
            // console.log(this.reclamation)
            window.location.reload()     
         })
       
   

     
    
      }
     

     
}
