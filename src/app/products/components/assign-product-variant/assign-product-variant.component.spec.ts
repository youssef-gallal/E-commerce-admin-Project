import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProductVariantComponent } from './assign-product-variant.component';

describe('AssignProductVariantComponent', () => {
  let component: AssignProductVariantComponent;
  let fixture: ComponentFixture<AssignProductVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignProductVariantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignProductVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
