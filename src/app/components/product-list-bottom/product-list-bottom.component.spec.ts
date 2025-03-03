import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListBottomComponent } from './product-list-bottom.component';

describe('ProductListBottomComponent', () => {
  let component: ProductListBottomComponent;
  let fixture: ComponentFixture<ProductListBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListBottomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
