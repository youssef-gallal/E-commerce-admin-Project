import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTagsProductComponent } from './assign-tags-product.component';

describe('AssignTagsProductComponent', () => {
  let component: AssignTagsProductComponent;
  let fixture: ComponentFixture<AssignTagsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignTagsProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignTagsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
