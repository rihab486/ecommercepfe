import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../models/model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const USERNAME_KEY = 'USERNAME';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private dbPath = '/Users';
  tutorialsRef!: AngularFirestoreCollection<User>;
  
  constructor(private http: HttpClient,private firestore: AngularFirestore) { 
  this.tutorialsRef = firestore.collection(this.dbPath);
}

    saveUsername(user: any) {
      window.localStorage.removeItem(USERNAME_KEY);
      window.localStorage.setItem(USERNAME_KEY, JSON.stringify(user));
    }
  
   
    public  getUsername(): any {
      const user = window.localStorage.getItem(USERNAME_KEY);
    }
  
    signOut() {
      window.localStorage.clear();
    }
  }
