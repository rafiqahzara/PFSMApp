import { Component, OnInit } from '@angular/core';
import { Product, ProductService} from '../services/product.service';
import { Router, ActivatedRoute  } from '@angular/router';
import {Review, ReviewService} from '../services/review.service';
import { ToastController } from '@ionic/angular';  
import { AngularFirestore } from '@angular/fire/firestore';
import { Profile, ProfileService } from './../services/profile.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-review-display',
  templateUrl: './review-display.page.html',
  styleUrls: ['./review-display.page.scss'],
})
export class ReviewDisplayPage implements OnInit {


  reviews : Review ={
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

  public profiles: Observable<Profile[]>;
  private products: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute, 
    private reviewService: ReviewService,
    private profileService: ProfileService,
    private toastCtrl: ToastController,
    private router: Router,

  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();

  }

  ionViewWillEnter(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  if(id){
     this.reviewService.getReview(id).subscribe( rev => {
    this.reviews = rev;
});
  }
}

updateReview() {  
  this.reviewService.updateReview(this.reviews).then(() => {  
    this.router.navigateByUrl('/profile');  
    this.showToast('review updated');  
  }, err => {  
    this.showToast('There was a some problem in updating your review :(');  
  });  
}  

deleteReview(){
  this.reviewService.deleteReview(this.reviews.id).then(
    () => {
      this.router.navigateByUrl('/profile');  
      this.showToast('delete review');
    }, err => {
      this.showToast('Cannot delete');
    }
  );
}

  
showToast(msg) {  
  this.toastCtrl.create({  
    message: msg,  
    duration: 2000  
  }).then(toast => toast.present());  
} 





}
