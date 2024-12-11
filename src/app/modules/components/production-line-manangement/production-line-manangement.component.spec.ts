import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLineManangementComponent } from './production-line-manangement.component';

describe('ProductionLineManangementComponent', () => {
  let component: ProductionLineManangementComponent;
  let fixture: ComponentFixture<ProductionLineManangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductionLineManangementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionLineManangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
