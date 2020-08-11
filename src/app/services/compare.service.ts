import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference, AngularFirestoreCollectionGroup, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, combineLatest } from 'rxjs';
import { Product, ProductService } from '../services/product.service'
import { Router, ActivatedRoute  } from '@angular/router';
import { map, take  } from 'rxjs/operators';


export interface Compare{ 
  id?: any;
  prodId: string;
  prodId2: string[];
  addedAt: number,
}

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  private  compareCollection: AngularFirestoreCollection<Compare>;
  private compares: Observable<Compare[]>

  constructor(
    public db: AngularFirestore,
    private activatedRoute: ActivatedRoute, 
    public productService: ProductService    
  ) { 
    this.compareCollection = this.db.collection<Compare>('compare');

    this.compares = this.compareCollection.snapshotChanges().pipe(
      map(act => {
        return act.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
  }

getCompares(){
  return this.compares;
}

addCompare(compare: Compare): Promise<DocumentReference>{
  return this.compareCollection.add(compare);
}

getCompare(id: string): Observable<Compare>{
  return this.compareCollection.doc<Compare>(id).valueChanges()
  .pipe(
    take(1),
    map( com => {
      com.id = id;
      return com;
    })
  );

}

getById(id: string): Observable<any> {
  return this.compareCollection.doc(id).valueChanges();
}

}
