import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference, 
  AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take  } from 'rxjs/operators';


export interface Product{
  id?: string;
  prodId: string;

    type: string;
    name: string;
    subname: string;
    price: number;
    size: number;
    skintype: string;
    skinconcern?: (string)[] | null;
    imageURL: string;
    urlpage: string;
    Brightening?: (string)[] | null;
    AntiAging?: (string)[] | null;
    PWH?: (string)[] | null;
    AcneFighting?: (string)[] | null;
    UVProtection?: (string)[] | null;
    allIngredient?: (string)[] | null;
    filter?: (string)[] | null;

  }

  

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productCollection: AngularFirestoreCollection<Product>;
  private products: Observable<Product[]>;


  constructor(
    private db: AngularFirestore,
    private afs: AngularFirestore,
    ) {
    this.productCollection = this.db.collection('products');
    this.products = this.productCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );  
 
  }

  getProducts(): Observable<Product[]> {
  return this.products;
}

  getProduct(id: string): Observable<Product> {
    return this.productCollection.doc<Product>(id).valueChanges().pipe(
      take(1),
      map( prod => {
        prod.id = id;
        return prod;
      })
    );
  }

  /*updateDocID(id:string, pid:string): Promise<void> {  
    return this.productCollection.doc(id).update({ prodId:pid }); 
  }*/

  getSpecificProducts(id: string): Observable<any> {
    return this.afs.collection<Product>('products', 
    ref => ref.where ( 'id' , '==' , id )).valueChanges();
}

getById(id: string): Observable<any> {
  return this.productCollection.doc(id).valueChanges();
}

  searchProduct(name:string): Observable<any> {
    return this.afs.collection<Product>('products',
    ref => ref.where ('name', '==', name)).snapshotChanges();
  }




}

