import { Component, OnInit, ViewChild } from '@angular/core';
import { Product, ProductService} from '../services/product.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { Observable, combineLatest  } from 'rxjs/';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, take, startWith  } from 'rxjs/operators';
import { IonSearchbar} from '@ionic/angular';
import * as firebase from 'firebase/app';
import { ProductDisplayPage } from '../product-display/product-display.page';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {

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

  

  constructor(private productService: ProductService,
    private router: Router,
    private db: AngularFirestore,
    private activatedRoute: ActivatedRoute, 
   ) {   }




  ngOnInit() { 

   this.db.collection('products').valueChanges({idField: 'prodId'})
    .subscribe( prodData => {
    this.productData = prodData;
    this.loadedProductData = prodData;

    console.log("Product Get", this.productData);

  });
 
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
      if (product.name && searchTerm) {
        if (product.name.toLowerCase()
        .indexOf(searchTerm.toLowerCase()) > -1) {
                  return true;
        }
                return false;
             }
    });


  }

  filterType(evt){
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
}
  


