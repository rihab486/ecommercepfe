import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {Comment, Product, ProductOrder, Reclamation, ReplayComment, UpdateProduct } from '../models/model';
import { CommentsService } from '../Services/comments.service';
import { ProductService } from '../Services/product.service';
import { ReclamationsService } from '../Services/reclamations.service';
import { ReplayCommentService } from '../Services/replay-comment.service';
import { TokenStorageService } from '../Services/token-storage.service';


@Component({
  selector: 'app-replay-comment',
  templateUrl: './replay-comment.component.html',
  styleUrls: ['./replay-comment.component.css']
})
export class ReplayCommentComponent implements OnInit {
  reclamation: Reclamation = {} as Reclamation;
  currentComment : any;
  roles: string[] = [];
  idUser : any ;
  isLoggedIn: any;
  idComment: any
  repcomment: ReplayComment = {} as ReplayComment;
  constructor(private rout: Router,private replaycommentservice: ReplayCommentService,private route: ActivatedRoute,
    private tokenStorage:TokenStorageService, @Inject(MAT_DIALOG_DATA) public data: any) 
    {
    
    }
  ngOnInit(): void {
  }
  addReplayComment(){
    this.replaycommentservice.addReplayCommentToComment(this.repcomment, this.data.idComment).subscribe(
      ( ) => { 
        this.repcomment = this.repcomment;
        // console.log(this.repcomment)
           window.location.reload();
     })

  }


      
     

     
}
