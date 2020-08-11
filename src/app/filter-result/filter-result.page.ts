import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Product, ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ComparePage } from '../compare/compare.page';
import { compileBaseDefFromMetadata, I18NHtmlParser } from '@angular/compiler';





@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.page.html',
  styleUrls: ['./filter-result.page.scss'],
})
export class FilterResultPage implements OnInit {


  data: any[] = [];
  public productData: any[];
  public loadedProductData: any[];
  private products: Observable<Product[]>;

  datastring: string;
  datarray: any[];
  skintype: string;
  type: string;
  skinconcern: string;
  dataview: string;

  product: Product ={
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
      filter: [""]

  };



constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public db: AngularFirestore,
    private productService: ProductService,
    ) {

    //get data in array user input
      this.data = JSON.parse(this.activatedRoute.snapshot.params.data); 
      console.log("Answer Array DATA", this.data);

      // FOR VIEW PURPOSE//

      this.dataview = JSON.stringify(this.data,function(k,v){
        if(v instanceof Array)
           return JSON.stringify(v);
        return v;
     },1)
     .replace(/answer/g, '')
     .replace(/\{/g,'')
     .replace(/\:/g, '')
     .replace(/\\/g, '')
     .replace(/\"\[/g, '[')
     .replace(/\]\"/g,']')
     .replace(/\"\{/g, '{')
     .replace(/\}\"/g,'}')
     .replace(/\{\"\"\:/g, '')
     .replace(/\}/g, '')
     .replace(/\[\"/g, '')
     .replace(/\"/g, '')
     .replace(/\]/g, '')
     .replace(/\,/g, ' , ');

      //END VIEW PURPOSE//

    //convert INGREDIENT input to string  array[3]
    this.datastring = JSON.stringify(this.data[3],function(k,v){
      if(v instanceof Array)
         return JSON.stringify(v);
      return v;
   },1)
   .replace(/answer/g, '')
   .replace(/\{/g,'')
   .replace(/\:/g, '')
   .replace(/\\/g, '')
   .replace(/\"\[/g, '[')
   .replace(/\]\"/g,']')
   .replace(/\"\{/g, '{')
   .replace(/\}\"/g,'}')
   .replace(/\{\"\"\:/g, '')
   .replace(/\}/g, '')
   .replace(/\[\"/g, '')
   .replace(/\"/g, '')
   .replace(/\]/g, '')
   //.replace(/\,/g, '')
   .replace(/\n|\r/g, '')
   .replace(/\s+/g, '');

   console.log("ingredient String: ", this.datastring);

   this.datarray = this.datastring.split(",");

}

ngOnInit() {

    this.products = this.productService.getProducts();

}
//To compare product type and skin type input data to 
//product.type and product.skintype, (TONER , Oily)
typeskintype(type, skintype){ //SUCCESS

      this.type = JSON.stringify(this.data[0],function(k,v){ //product type
        if(v instanceof Array)
           return JSON.stringify(v);
        return v;
     },1)
     .replace(/answer/g, '')
     .replace(/\{/g,'')
     .replace(/\:/g, '')
     .replace(/\\/g, '')
     .replace(/\"\[/g, '[')
     .replace(/\]\"/g,']')
     .replace(/\"\{/g, '{')
     .replace(/\}\"/g,'}')
     .replace(/\{\"\"\:/g, '')
     .replace(/\}/g, '')
     .replace(/\[\"/g, '')
     .replace(/\"/g, '')
     .replace(/\]/g, '')
     //.replace(/\,/g, '')
     .replace(/\n|\r/g, '')
     .replace(/\s+/g, '');

      this.skintype = JSON.stringify(this.data[1],function(k,v){ //skin type
        if(v instanceof Array)
           return JSON.stringify(v);
        return v;
     },1)
     .replace(/answer/g, '')
     .replace(/\{/g,'')
     .replace(/\:/g, '')
     .replace(/\\/g, '')
     .replace(/\"\[/g, '[')
     .replace(/\]\"/g,']')
     .replace(/\"\{/g, '{')
     .replace(/\}\"/g,'}')
     .replace(/\{\"\"\:/g, '')
     .replace(/\}/g, '')
     .replace(/\[\"/g, '')
     .replace(/\"/g, '')
     .replace(/\]/g, '')
     //.replace(/\,/g, '')
     .replace(/\n|\r/g, '')
     .replace(/\s+/g, '');

     
     var from_input = this.type.concat(" ", this.skintype); //from input

     var from_database = type.concat(" ", skintype); //from database

     console.log("Input Type and SkinType:", from_input);
     console.log("Database Type and SkinType:", from_database);

     const typeskintype = from_input.includes(from_database);
     console.log("Check typeskintype:", typeskintype);

     return typeskintype;


}
     //To compare skin concern input data to product.skinconcern
skinConcern(skinCans){

        this.skinconcern =JSON.stringify(this.data[2],function(k,v){
          if(v instanceof Array)
             return JSON.stringify(v);
          return v;
       },1)
       .replace(/answer/g, '')
       .replace(/\{/g,'')
       .replace(/\:/g, '')
       .replace(/\\/g, '')
       .replace(/\"\[/g, '[')
       .replace(/\]\"/g,']')
       .replace(/\"\{/g, '{')
       .replace(/\}\"/g,'}')
       .replace(/\{\"\"\:/g, '')
       .replace(/\}/g, '')
       .replace(/\[\"/g, '')
       .replace(/\"/g, '')
       .replace(/\]/g, '')
       .replace(/\n|\r/g, '')
       .replace(/\-/g, '')
       .replace(/\s+/g, '');
  
       console.log("Input Skin Concern", this.skinconcern);
       console.log("Database Skin Concern", skinCans);
  
       const skinCarray =  this.skinconcern.split(",");
       console.log("Input Skin Concern Array", skinCarray);
  
       const check =  skinCarray.some(c => skinCans.includes(c));
       console.log("Check skinConcern:", check);
  
       return check;
      

}

 //To compare ingredient input data to product.filter
compare_data(datarray, filter){
    
    console.log("Input Ingredient Array: ", datarray); //input
    console.log("Database Ingredient Array: ", filter); //database
    const compare = datarray.some(r => filter.includes(r));
    console.log("Check Ingredient: ", compare);  
    return compare;
   
}

    pickProductType(answer: string){ //SUCCESS
      return this.db.collection<Product>('products',
      ref => ref.where('type', '==', answer)).snapshotChanges();
     
    }





  
  



}
