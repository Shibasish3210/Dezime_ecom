import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVariationsComponent } from './product-variations.component';

describe('ProductVariationsComponent', () => {
  let component: ProductVariationsComponent;
  let fixture: ComponentFixture<ProductVariationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductVariationsComponent]
    });
    fixture = TestBed.createComponent(ProductVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
