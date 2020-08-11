import { Component, OnInit } from '@angular/core';
import { Product, ProductService} from '../services/product.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router  } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Profile, ProfileService } from './../services/profile.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  qsForm: FormGroup;

  singleChoice: any[] = [
    {
      question: 'Product Type',
      choice1: 'Cleanser',
      choice2: 'Moisturizer',
      choice3: 'Toner',
      choice4: 'Sunscreen',
      choice: ''
    },
   {
      question: 'Skin Type',
      choice1: 'Dry',
      choice2: 'Combination',
      choice3: 'Oily',
      choice: ''
    }

  ];

  multiChoiceskin: any[] = [
    {
      question: 'Skin Concern',
      choice1: 'Dryness',
      choice2: 'Acne-Scar',
      choice3: 'Acne-Prone',
      choice4: 'Wrinkles',
      choice5: 'Oiliness',
      choice: ''
    },
  ]

  multiChoice: any[] = [
    {
      question: 'Ingredient Preference',
      choice1: 'Sodium Hyaluronate',
      choice2: 'Vitamin E',
      choice3: 'Hyaluronic Acid',
      choice4: 'Salicylic Acid',
      choice5: 'Niacinamide',
      choice6: 'Glycolic Acid',
      choice7: 'Panthenol',
      choice8: 'Licorice',
      choice9: 'Ceramide',
      choice10: 'Tea Tree Oil',
      choice11: 'Citric Acid',
      choice12: 'Centella Asiatica Extract',
      choice: ''
    },

  ];

  private products: Observable<Product[]>;
  private profiles: Observable<Profile[]>;

  showDetails: boolean= false;



  pro : Product ={
    prodId: "",
    type: "",
    name: "",
    subname: "",
    price: undefined,
    size: undefined,
    skintype: "",
    skinconcern: [""],

    urlpage: "",
    imageURL: "",
    
      Brightening: [""],
      AntiAging: [""],
      PWH: [""],
      AcneFighting: [""],
      allIngredient: [""],

  };


  printType: string;
  printSType
  skinconcern: any;


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private profileService: ProfileService,
    private productService: ProductService,

    ) {

   
   this.qsForm = this.formBuilder.group({
    quests: this.formBuilder.array([
     this.initQuests()
    ]),
    quests2: this.formBuilder.array([
     this.initQuests()
    ]),
    quests3: this.formBuilder.array([
      this.initQuests()
     ])
   });
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
 }

  initQuests() {
   return this.formBuilder.group({
    question: '',
    choice1: '',
    choice2: '',
    choice3: '',
    choice4: '',
    choice5: '',
    choice6: '',
    choice7: '',
    choice8: '',
    choice9: '',
    choice10: '',
    choice11: '',
    choice12: '',

    choice: '',
   });
  }

  setQuest(quests: any) {
   const arr = new FormArray([]);
   quests.forEach((q: any) => {
    arr.push(this.formBuilder.group({
     question: q.question,
     nchoice1br: q.choice1,
     choice1: q.choice1,
     choice2: q.choice2,
     choice3: q.choice3,
     choice4: q.choice4,
     choice5: q.choice5,
     choice6: q.choice6,
     choice7: q.choice7,
     choice8: q.choice8,
     choice9: q.choice9,
     choice10: q.choice10,
     choice11: q.choice11,
     choice12: q.choice12,

     choice: ''
    }));
   });
   return arr;
  }

 ngOnInit() {

     this.profiles = this.profileService.getProfiles();
     this.products = this.productService.getProducts();


   this.qsForm = this.formBuilder.group({
     quests: this.setQuest(this.singleChoice),
     quests2: this.setQuest(this.multiChoiceskin),
     quests3: this.setQuest(this.multiChoice)
    });



 }

 selectCheckedSKIN(i: any, value: any) {
   const formArray = this.qsForm.controls.quests2 as FormArray; 
   const formGroup = formArray.at(i) as FormGroup;
   const choice = formGroup.controls.choice;
   if (choice.value.search(value) === -1) {
    if (choice.value !== '') {
     choice.setValue(choice.value + ',' + value);
    } else {
     choice.setValue(value);
    }
   } else {
    const splitted = choice.value.split(',');
    const idx = splitted.indexOf(value, 0);
    splitted.splice(idx, 1);
    choice.setValue(splitted.toString());
   }
  }

  selectChecked(i: any, value: any) {
    const formArray = this.qsForm.controls.quests3 as FormArray; 
    const formGroup = formArray.at(i) as FormGroup;
    const choice = formGroup.controls.choice;
    if (choice.value.search(value) === -1) {
     if (choice.value !== '') {
      choice.setValue(choice.value + ',' + value);
     } else {
      choice.setValue(value);
     }
    } else {
     const splitted = choice.value.split(',');
     const idx = splitted.indexOf(value, 0);
     splitted.splice(idx, 1);
     choice.setValue(splitted.toString());
    }
   }

  onSubmit() {
   const submitData: any[] = [];
   this.qsForm.value.quests.forEach((qu: any) => {
    submitData.push({

     answer: qu.choice
    });
   });

   this.qsForm.value.quests2.forEach((qu2: any) => {
    submitData.push({

     answer: qu2.choice
    });
   });

   this.qsForm.value.quests3.forEach((qu3: any) => {
    submitData.push({

     answer: qu3.choice
    });
   });
   

   console.log("answer data: ", JSON.stringify(submitData));
   this.router.navigate(['/filter-result/' + JSON.stringify(submitData)]);
  }
     
/*
  pickProductType(type: string){ //SUCCESS
    console.log("type: ", type);
    this.printType = type;

    return this.db.collection<Product>('products',
    ref => ref.where('type', '==', type)).snapshotChanges(); 
  }

  pickSkinType(skintype: string, value: string){ //SUCCESS
    console.log("skintype:", value);
    return skintype.includes(value);
  }
*/

checkSkinConcern(proskin, itemskin){

  let replace;

  replace = proskin.replace(/\-/g, '')
  .replace(/\s+/g, '');

  //console.log("proskin:", proskin);
  //console.log("replace:", replace);
  //console.log("itemskin", itemskin);

  const checkskinCons = itemskin.includes(replace);
  //console.log("checkskinCons", checkskinCons);

  return checkskinCons;
}

 


}
