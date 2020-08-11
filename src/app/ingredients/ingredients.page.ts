import { Component, OnInit } from '@angular/core';
import { Product, ProductService} from '../services/product.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
})
export class IngredientsPage implements OnInit {

  private products: Observable<Product[]>;

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
