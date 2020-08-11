import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductService} from '../services/product.service';
import {Compare, CompareService} from '../services/compare.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';  
import { ToastController } from '@ionic/angular';  

@Component({
  selector: 'app-add-compare',
  templateUrl: './add-compare.page.html',
  styleUrls: ['./add-compare.page.scss'],
})
export class AddComparePage implements OnInit {

  compare: Compare ={
    prodId: "",
    prodId2: [""],
    addedAt: new Date().getTime(),
  };
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

  private products: Observable<Product[]>;

  public productData: any[];
  public loadedProductData: any[];
  prodId: any;

  constructor(private activatedRoute: ActivatedRoute,
    private compareService: CompareService,  
    private productService: ProductService,
    private db: AngularFirestore,
    private toastCtrl: ToastController, private router: Router) { 

    }

  ngOnInit() {
 
  this.products = this.productService.getProducts();
  this.db.collection('products').valueChanges({idField: 'prodId'})
  .subscribe( prodData => {
  this.productData = prodData;
  this.loadedProductData = prodData;

  console.log("Product Get", this.productData);

});

  this.compare.prodId = this.activatedRoute.snapshot.paramMap.get('id');
  this.compares = this.compareService.getCompares();

}

  ionViewWillEnter() {  
    const prodId = this.activatedRoute.snapshot.paramMap.get('id');  
    if (prodId) {  
      this.productService.getProduct(prodId)
      .subscribe(prod => {
        this.pro = prod;
      })

      this.compareService.getCompare(prodId)
      .subscribe(com => {  
      this.compare = com; 
      });  

      console.log("product id", this.compare.prodId);

    }  
  }
  
  
  addCompare() {  
    this.compare.addedAt = new Date().getTime();
    this.compareService.addCompare(this.compare).then(() => {  
      this.router.navigateByUrl('/compare');  
      this.showToast('go to view recent comparison');  
    }, err => {  
      this.showToast('There was a some problem in adding your comparison :(');  
    });  
  }

  showToast(msg) {  
    this.toastCtrl.create({  
      message: msg,  
      duration: 2000  
    }).then(toast => toast.present());  
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
        if (product.type.toLowerCase()
        .indexOf(searchTerm.toLowerCase()) > -1) {
                  return true;
        }
                return false;
             }
    });


  }
}
