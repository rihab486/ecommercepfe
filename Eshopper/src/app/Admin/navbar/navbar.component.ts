import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, User } from 'src/app/models/model';
import { ProductService } from 'src/app/Services/product.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: any;
  currentUser: any
  products!: Product[];
  roles: string[] = [];

  constructor(private productService: ProductService, private tokenstorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenstorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenstorage.getToken();
      this.roles = this.tokenstorage.getUser().roles;
    }


  }

  logout() {

    this.tokenstorage.signOut();
    this.router.navigate(['/dashboarda'])
    window.location.reload();
  }
}
