import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateProductcategoryComponent } from './create-update-productcategory.component';

describe('CreateUpdateProductcategoryComponent', () => {
  let component: CreateUpdateProductcategoryComponent;
  let fixture: ComponentFixture<CreateUpdateProductcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateProductcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateProductcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
