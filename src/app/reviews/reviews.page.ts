import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Product, ProductService} from '../services/product.service';
import {Review, ReviewService} from '../services/review.service';
import { Profile, ProfileService } from './../services/profile.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { map, take  } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { User, AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})



export class ReviewsPage implements OnInit {

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


  private reviews : Observable<Review[]>;
  private products: Observable<Product[]>;
  private profiles: Observable<Profile[]>;
  private user: Observable<User[]>;
 // private user: Observable<User[]>;

  rev : Review ={
    prodId: "",
    reviewTitle: "",
    rating: undefined,
    reviewContent: "",
    addedAt: new Date().getTime(),

    email:"",
    profid:"",
    name: "",
    skintype: "",
    skinconcern: ""
  };

  useremail: string;

  constructor(private productService: ProductService,
    private reviewService: ReviewService,
    public db: AngularFirestore,
    private profileService: ProfileService,
    private navCtrl: NavController,
    private authService: AuthenticationService,

    )  {  }


  ngOnInit() {    

    this.profiles = this.profileService.getProfiles();
    this.products = this.productService.getProducts();
    this.reviews = this.reviewService.getReviews();

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



  
}
