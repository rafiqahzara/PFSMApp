import { Component, OnInit } from '@angular/core';
import { Product, ProductService} from '../services/product.service';
import { Router, ActivatedRoute  } from '@angular/router';
import {Compare, CompareService} from '../services/compare.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-compare',
  templateUrl: './view-compare.page.html',
  styleUrls: ['./view-compare.page.scss'],
})
export class ViewComparePage implements OnInit {


  compare: Compare ={
    prodId: "",
    prodId2: [""],
    addedAt: new Date().getTime(),
  };

  private products: Observable<Product[]>;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private productService: ProductService,
    private compareService: CompareService,

  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
     this.compareService.getCompare(id).subscribe( com => {
    this.compare = com;
  });
  }
  }


}
