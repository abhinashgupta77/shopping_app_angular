import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/productModel';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-productlists',
  templateUrl: './productlists.component.html',
  styleUrls: ['./productlists.component.css']
})
export class ProductlistsComponent implements OnInit {

  public productsList: Product[];
  public count = 0;
  public price = 0;
  constructor(private service: ProductserviceService) { }

  ngOnInit() {
    this.service.getProduct().subscribe(response => {
      if(response != undefined){
        this.productsList = response;
      }
    });
  }

  addProductToCart(product){
    this.count++;
    this.price = this.price + product.price;
  }
  removeProductToCart(product){
    this.count--;
    this.price = this.price - product.price;
  }
}
