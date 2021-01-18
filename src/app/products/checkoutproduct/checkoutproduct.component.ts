import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkoutproduct',
  templateUrl: './checkoutproduct.component.html',
  styleUrls: ['./checkoutproduct.component.css']
})
export class CheckoutproductComponent implements OnInit {
  @Input() count = 0;
  @Input() price = 0;
  showModal = false;
  constructor() { }

  ngOnInit() {
  }

  checkout(){
    document.querySelector('body').style.overflow = "hidden";
    this.showModal = true;
  }

  closePopup(){
    document.querySelector('body').style.overflow = "auto";
    this.showModal = false;
  }
}
