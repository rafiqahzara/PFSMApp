import { Component, OnInit } from '@angular/core';
import { Product, ProductService} from '../services/product.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { Observable } from 'rxjs';
import {Review, ReviewService} from '../services/review.service';
import { ToastController } from '@ionic/angular';  
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.page.html',
  styleUrls: ['./product-display.page.scss'],
})
export class ProductDisplayPage implements OnInit {
  
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
      UVProtection: [""],
      allIngredient: [""],

  };

  
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute, 
    private reviewService: ReviewService,
    private toastCtrl: ToastController,
    private db: AngularFirestore,
    private router: Router,
    ) {}

  ngOnInit() {  

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
        this.productService.getProduct(id)
        .subscribe( products => {
        this.products = products;

        //this.productService.updateDocID;
        //return this.goToAddReview(id);
      });
    }


    }

  
 /*  ionViewDidEnter(){

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){

        this.productService.getProduct(id)
        .subscribe( products => {
        this.products = products;

        //this.productService.updateDocID;
        //return this.goToAddReview(id);
      });
    }


  }

 goToAddReview(id) {
    this.router.navigate(['/add-review', id]);
  } */

  
 


}
