import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutproductComponent } from './checkoutproduct.component';

describe('CheckoutproductComponent', () => {
  let component: CheckoutproductComponent;
  let fixture: ComponentFixture<CheckoutproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
