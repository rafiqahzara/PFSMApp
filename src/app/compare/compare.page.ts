import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductService} from '../services/product.service';
import {Compare, CompareService} from '../services/compare.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

import { Router } from '@angular/router';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.page.html',
  styleUrls: ['./compare.page.scss'],
})
export class ComparePage implements OnInit {

  private products: Observable<Product[]>;
  private compares: Observable<Compare[]>;
 


  pro: Product ={
    prodId: "",
    type: "",
    name: "",
    subname: "",
    price: undefined,
    size: undefined,
    skintype: "",
    skinconcern: [""],

    imageURL: "",
    urlpage: "",
    
      Brightening: [""],
      AntiAging: [""],
      PWH: [""],
      AcneFighting: [""],
      allIngredient: [""],

  };

  public productData: any[];
  public loadedProductData: any[];
  prodId: any;
  showDetails: boolean= false;


  constructor(private productService: ProductService,
    private compareService: CompareService,
    public db: AngularFirestore,
    ) 
  {   }
 

  ngOnInit() {

    this.products = this.productService.getProducts();
    this.compares = this.compareService.getCompares();

    this.db.collection('products').valueChanges({idField: 'prodId'})
    .subscribe( prodData => {
    this.productData = prodData;
    this.loadedProductData = prodData;

    console.log("Product Get", this.productData);

  });

  }

  pickProductType(type: string){ //SUCCESS
    console.log("type: ", type);

    return this.db.collection<Product>('products',
    ref => ref.where('type', '==', type)).snapshotChanges(); 
  }

  initializeItems(): void {
    this.productData = this.loadedProductData;
  } 

  filterList(evt){
    const searchTerm = evt.srcElement.value;

    this.initializeItems();

    if(!searchTerm){
      return;
    }

    this.productData = this.productData.filter(product => {
      if (product.type && searchTerm) {
        if (product.type.toLowerCase()
        .indexOf(searchTerm.toLowerCase()) > -1) {
                  return true;
        }
                return false;
             }
    });


  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
 }
 

}
