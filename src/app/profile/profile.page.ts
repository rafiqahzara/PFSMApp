import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Profile, ProfileService } from './../services/profile.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../services/authentication.service';
import {Review, ReviewService} from '../services/review.service';
import { Product, ProductService} from '../services/product.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})


export class ProfilePage implements OnInit {

  private reviews : Observable<Review[]>;
  public profiles: Observable<Profile[]>;
  public users: Observable<User[]>
  private products: Observable<Product[]>;


  useremail: string;
  profid: string;
  uid: string;

   constructor(
    private profileService: ProfileService,
    private router: Router,
    private authService: AuthenticationService,
    private afAuth: AngularFireAuth,
    private reviewService: ReviewService,
    private productService: ProductService,
    private toastCtrl: ToastController,

    ) { }

  ngOnInit() {   

    this.profid = this.authService.getCurrentUser().uid;
    console.log("profile id", this.profid);
    
    if(this.authService.getCurrentUser())
    {
      this.useremail = this.authService.getCurrentUser().email;
    }
  
    this.profiles = this.profileService.getProfiles();
    this.reviews = this.reviewService.getReviews();
    this.products = this.productService.getProducts();


    }

    profileID(id){
      if(id == null){
        this.router.navigate(['/login']);
      }else
      console.log("profileID", id);

    }

    showToast(msg) {  
      this.toastCtrl.create({  
        message: msg,  
        duration: 2000  
      }).then(toast => toast.present());  
    }  
  


   
 
}




  
  
