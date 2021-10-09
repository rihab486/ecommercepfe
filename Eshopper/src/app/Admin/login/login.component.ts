import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/model';
import { UserService } from 'src/app/Services/user.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/Services/auth-user.service';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  filePath!: String
  provider: any;
  isSignedG !: false
  form: any = {
    email: null,
    password: null
  }
  showuser!: false
  users: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  issucces = false;
  islog = false;
  isLoginFailed = false;
  roles: string[] = [];
  isSucces = false;
  constructor(
    public dialog: MatDialog,
    private tokenStorage: TokenStorageService,
    private authservice: AuthUserService, private router: Router) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.issucces = true;
      this.islog = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.isSignedG = false
    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider = provider;
  }

  login(): void {
    const credentials = this.form;

    this.authservice.login(credentials).subscribe(
      data => {
        console.log(data);

        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.issucces = true;
        this.islog = true;
        
        console.log();
        
        {
          if (this.tokenStorage.getUser().roles.includes('ROLE_ADMIN')) {
            const user = this.tokenStorage.getUser();
            this.router.navigate(['/account', user.id])
          }
          else if (this.tokenStorage.getUser().roles.includes('ROLE_CLIENT')) {
            const user = this.tokenStorage.getUser();
            this.router.navigate(['/accountu', user.id])
          }
          else if (this.tokenStorage.getUser().roles.includes('ROLE_LIVREUR')) {
            const user = this.tokenStorage.getUser();
            this.router.navigate(['/accountl', user.id])
          }
        }


      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );


  }
  reloadPage(): void {
    window.location.reload();

  }
  onSubmit(): void {
    const { username, email, password, adresse, ville, phone, codepostal } = this.form;

    this.authservice.register(username, email, password, adresse, ville, phone, codepostal).subscribe(
      data => {
        // console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  /*GoogleAuths(){
    firebase.auth().signInWithPopup(this.provider).then((result:any) => {
      var users = result.users;
      // console.log(users);
     
    }).catch((error:any) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }*/


}
