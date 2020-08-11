import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs'
import {AngularFireAuth} from '@angular/fire/auth';
import { map, take } from 'rxjs/operators';  
import { NavController } from '@ionic/angular';


export interface User{
  id?: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  private userCollection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>

 
  constructor(private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController) 
    
    { 
    this.userCollection = db.collection<User> ('users');
    this.users = this.userCollection.snapshotChanges().pipe(
      map (actions => {
        return actions.map (a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ... data};
        })
      })
    )
  }

 registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password).then(
        res => {
          console.log("User id after reigstration = "+res.user.uid);
          let user: User = {
            email: value.email,
            id: res.user.uid,
          };
          this.userCollection.doc(res.user.uid).set(user);
          resolve(res);
        }, err => {
          reject(err);
        }
      )
   })
  }

  loginUser(value) {
    return firebase.auth().signInWithEmailAndPassword(value.email, value.password);
  }
 
  getCurrentUser() {
    if(firebase.auth().currentUser) {
      return firebase.auth().currentUser;
    } else {
    this.navCtrl.navigateBack('/login');    }
  }


 logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("Log Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }

  /*  getCurrentUser() {
      var user = firebase.auth().currentUser;
      var name, email, uid;

      if(user != null){
        name = user.displayName;
        email = user.email;
        uid = user.uid;
      }


      return user;

  }*/



   /*loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email.trim(), value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }

 logoutUser() {
    firebase.auth().signOut();
  }
   userDetails(){
    return firebase.auth().currentUser;
  }*/

  
}


 
