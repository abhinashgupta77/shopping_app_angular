import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product } from "src/app/model/productModel";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productAdded = new EventEmitter();
  @Output() productRemoved = new EventEmitter();

  
  constructor() {}

  ngOnInit() {
    this.product.count = 0;
  }

  addProductToCart(product) {
    product.count++;
    this.productAdded.emit(product);

  }

  removeProductFromCart(product) {
    product.count--;
    this.productRemoved.emit(product);
  }
}
