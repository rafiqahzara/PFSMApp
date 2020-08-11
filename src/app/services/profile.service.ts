import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { map, take  } from 'rxjs/operators';

export interface Profile{
  id?: string;
  name: string;
  age: number;
  skintype: string;
  skinconcern: string;

  email: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileCollection: AngularFirestoreCollection<Profile>;
  private profiles: Observable<Profile[]>;

  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private authService: AuthenticationService)
    { let currentUser = this.authService.getCurrentUser();
      if(this.afAuth.auth.currentUser){
        let user = this.afAuth.auth.currentUser.uid;
      }

      if(currentUser){
        this.refreshProfileCollection(currentUser.uid);
      }
    }

    refreshProfileCollection(userID){
      this.profileCollection = this.db.collection('users').doc(userID).collection<Profile>('profile');
      this.profiles = this.profileCollection.snapshotChanges().pipe(
        take(1),
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
      )
    }

    getProfiles(): Observable<Profile[]>{
      return this.profiles;
    }

getProfile(id: string): Observable<Profile>{
      return this.profileCollection.doc<Profile>(id).valueChanges().pipe(
        take(1),
        map( pro => {
          pro.id = id;
          return pro;
        })
      );
    }

    updateProfile(profile: Profile): Promise<void>{
      return this.profileCollection.doc(profile.id).update({name:profile.name, age: profile.age, skintype: profile.skintype, skinconcern: profile.skinconcern });
    }

    getProfileID(){
      this.profileCollection.snapshotChanges().pipe(
        take(1),
        map(actions => actions.map(a => {
          const id = a.payload.doc.id;
          console.log("Profile", id);
          return {id};
        }))
      )


    }


    addProfile(profile: Profile): Promise<DocumentReference>{
      return this.profileCollection.add(profile);
    }

    deleteProfile(id: string){
      return this.profileCollection.doc(id).delete();
    }
}
