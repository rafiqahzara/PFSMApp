import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference, AngularFirestoreCollectionGroup, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, combineLatest } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, take, switchMap  } from 'rxjs/operators';
import { Product, ProductService } from '../services/product.service'
import { Router, ActivatedRoute  } from '@angular/router';


export interface Review{ 
  id?: any;
  prodId: string;

  reviewTitle: string;
  reviewContent: string;
  rating: number;  
  addedAt: number,
  
  email: string;
  profid: any;
  name: string
  skintype: string;
  skinconcern: string;
}


@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  private reviewCollection: AngularFirestoreCollection<Review>;
  private reviews: Observable<Review[]>;

  constructor(
    public db: AngularFirestore,
    private activatedRoute: ActivatedRoute, 
    public productService: ProductService) { 
      this.reviewCollection =  this.db.collection<Review>('reviews');

        this.reviews = this.reviewCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

 addReview(review: Review): Promise<DocumentReference>{
  return this.reviewCollection.add(review); }

  getReview(id: string): Observable<Review>{
  return this.reviewCollection.doc<Review>(id).valueChanges()
  .pipe(
    take(1),
    map( rev => {
      rev.id = id;
      return rev;
    })
  );
}

getReviews(){
  return this.reviews; }

updateReview(review: Review): Promise<void>{
  return this.reviewCollection.doc(review.id)
  .update({
    reviewTitle: review.reviewTitle,
    reviewContent: review.reviewContent,
    rating: review.rating
    });
}

deleteReview(id: string){
  return this.reviewCollection.doc(id).delete(); }

}