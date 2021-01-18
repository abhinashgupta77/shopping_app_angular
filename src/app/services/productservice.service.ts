import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../model/productModel";

@Injectable({
  providedIn: "root",
})
export class ProductserviceService {
  constructor(private http: HttpClient) {}
  getProduct() {
    return this.http.get<Product[]>("assets/productsList.json");
  }
}
