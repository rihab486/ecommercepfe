import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { find } from 'rxjs/operators';
import { ContactUsComponent } from '../Admin/contact-us/contact-us.component';
import { Cart } from '../models/Cart.model';
import { ERole, User, Reclamation, ReplayReclamation } from '../models/model';
import { ReplayCommentComponent } from '../replay-comment/replay-comment.component';
import { ReplayreclamationComponent } from '../replayreclamation/replayreclamation.component';
import { AuthUserService } from '../Services/auth-user.service';
import { CartService } from '../Services/cart.service';
import { ReclamationsService } from '../Services/reclamations.service';
import { ReplayreclamationService } from '../Services/replayreclamation.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.css']
})
export class AccountUserComponent implements OnInit {
  private roles: string[] = [];
  currentUser: any;
  id: any;
  isLoggedIn: any
  carts!: Cart[];
  users !: User;
  cartLength = 0;
  currentIndex = -1;
  name = '';
  ROLE_CLIENT !: ERole
  ROLE_LIVREUR !: ERole

  reclamation!: Reclamation[];
  replyreclamation !: ReplayReclamation[];

  constructor(private userservice: AuthUserService, private dialog: MatDialog, private reclamationservice: ReclamationsService, private route: ActivatedRoute,
    private cartService: CartService, private router: Router, private token: TokenStorageService
    , private replayreclamationservice: ReplayreclamationService) { }

  ngOnInit(): void {

    this.currentUser = this.token.getUser();
    this.cartService.findCartsForUser(this.currentUser.id).subscribe(carts => {
      this.carts = carts;
      this.cartLength = this.carts.length;
      // console.log(this.carts)

      this.userservice.finduserbyid(this.currentUser.id).subscribe((use: any) => {
        this.users = use;
        // console.log("listUsres",this.users)
      });
    });

    this.reclamationservice.findReclamationsForUser(this.currentUser.id).subscribe(recla => {
      this.reclamation = recla;
      //  console.log("liste Reclamtion",this.reclamation)
      for (let i = 0; i < this.reclamation.length; i++)
        this.replayreclamationservice.findReplayReclamationsForReclamation(this.reclamation[i].id).subscribe(replyrecla => {
          this.replyreclamation = replyrecla;
          //  console.log("liste replay reclamation",this.replyreclamation)
        });
    });
  }


  deleteCart(idPro: any, idUser: any) {
    if (confirm('Are you sure')) {
      this.cartService.removeFromCart(idPro, idUser).subscribe(() => {
        window.location.reload();
      })
    }

  }
  deleteRecl(idReclamation: any, idUser: any) {
    if (confirm('Are you sure')) {
      this.reclamationservice.removeFromReclamation(idReclamation, idUser).subscribe(() => {
        window.location.reload();
      })
    }

  }
  logout(): void {
    this.token.signOut();
    this.router.navigate(['/dashboarda'])

  }

  addRecl(idU: any) {
    this.router.navigate(['/replay', idU])

  }

}
