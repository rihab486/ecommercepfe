import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/Cart.model';
import { ERole, Reclamation, User } from '../models/model';
import { ReplayreclamationComponent } from '../replayreclamation/replayreclamation.component';
import { AuthUserService } from '../Services/auth-user.service';
import { CartService } from '../Services/cart.service';
import { ReclamationsService } from '../Services/reclamations.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-account-livreur',
  templateUrl: './account-livreur.component.html',
  styleUrls: ['./account-livreur.component.css']
})
export class AccountLivreurComponent implements OnInit {

  private roles: string[] = [];
  currentUser: any;
  id: any;
  isLoggedIn: any
  cartLength = 0;
  currentIndex = -1;
  name = '';
  reclamations!: Reclamation[];
  carts!: Cart[];
  users !: User[];
  constructor(private userservice: AuthUserService, private dialog: MatDialog, private reclamationservice: ReclamationsService, private route: ActivatedRoute, private cartService: CartService,
    private router: Router, private token: TokenStorageService) { }

  ngOnInit(): void {

    this.currentUser = this.token.getUser();
    this.cartService.findAllCarts().subscribe((carts: Cart[]) => {
      this.carts = carts;
      this.cartLength = this.carts.length;
    })
    this.reclamationservice.findAllReclamations().subscribe(reclamations => {
      this.reclamations = reclamations;
      this.cartLength = this.reclamations.length;
    });
    this.currentUser = this.token.getUser();
    this.userservice.findAllUsers().subscribe(user => {
      this.users = user;
      // console.log("listUsres",this.users)
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
    // window.location.reload();
  }

  addRecl(idComment: any) {
    this.router.navigate(['/replayr', idComment])
    this.dialog.open(ReplayreclamationComponent, { data: { idComment } })


  }

}
