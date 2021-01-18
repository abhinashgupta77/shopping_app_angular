import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistsComponent } from './productlists/productlists.component';
import { CheckoutproductComponent } from './checkoutproduct/checkoutproduct.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductlistsComponent, CheckoutproductComponent, ProductComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [ProductlistsComponent, CheckoutproductComponent]
})
export class ProductsModule { }
