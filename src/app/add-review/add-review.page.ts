import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Product, ProductService} from '../services/product.service';
import {Review, ReviewService} from '../services/review.service';
import { Observable } from 'rxjs';
import { map, take  } from 'rxjs/operators';
import { ToastController } from '@ionic/angular'; 
import { AuthenticationService } from '../services/authentication.service';
import { Profile, ProfileService } from './../services/profile.service';
import * as firebase from 'firebase/app'
import { $$ } from 'protractor';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.page.html',
  styleUrls: ['./add-review.page.scss'],
})



export class AddReviewPage implements OnInit {

  products: Product ={
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

  reviews: Review ={
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

 profile: Profile = {
    name: "",
    age:  undefined,
    skintype: "",
    skinconcern: "",

    email:""
  };


  public profiles: Observable<Profile[]>;

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute, 
    private reviewService: ReviewService,
    private toastCtrl: ToastController,
    private router: Router,
    private authService: AuthenticationService,
    private profileService: ProfileService,

    public db: AngularFirestore,
  ) {

    if(this.authService.getCurrentUser()) {
      this.reviews.email = this.authService.getCurrentUser().email;
    }else{
      this.router.navigate(['/login']);
    }

    var SKIN = this.getSKIN(
      this.profile.name, 
      this.profile.skintype, 
      this.profile.skinconcern)
      
    console.log("SKIN", SKIN);
    

  }

   getSKIN(name, skintype, skinconcern){
    console.log("skintype", skintype);
    console.log("skinconcern", skinconcern);
    console.log("name", name);

    this.reviews.name = name;
    this.reviews.skintype = skintype;
    this.reviews.skinconcern = skinconcern;

    return ;

  }
  
   ngOnInit() {
    
    this.reviews.prodId = this.activatedRoute.snapshot.paramMap.get('id');
   
    this.profiles = this.profileService.getProfiles();

    this.reviews.profid = this.authService.getCurrentUser().uid;


  }
  
  getProfileID(profID){
  console.log("getProfileID", profID);
  this.reviews.profid = profID

   return this.reviews.profid;
  }



   ionViewWillEnter() {  
    const prodId = this.activatedRoute.snapshot.paramMap.get('id');  
    if (prodId) {  
      this.productService.getProduct(prodId)
      .subscribe(pro => {
      this.products = pro;

      this.reviewService.getReview(this.reviews.prodId)
      .subscribe(rev => {  
      this.reviews = rev;

      var revprofid = this.getProfileID(this.profile.id);
      console.log("profile id", revprofid);

      this.profileService.getProfile(this.reviews.profid)
      .subscribe(prof => {
      this.profile = prof;
      });
      });
      }); 

      console.log("profile id", this.reviews.profid);
      console.log("product id", this.reviews.prodId);
    }  
  }  

  addReview() {  
  
    this.reviews.addedAt = new Date().getTime();
    this.reviewService.addReview(this.reviews).then(() => {  
      this.router.navigateByUrl('/reviews');  
      this.showToast('review added');  
    }, err => {  
      this.showToast('There was a some problem in adding your review :(');  
    });  
  }  

  showToast(msg) {  
    this.toastCtrl.create({  
      message: msg,  
      duration: 2000  
    }).then(toast => toast.present());  
  }  

  
  
}  
 
 



