import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateSubcategoryComponent } from './create-update-subcategory.component';

describe('CreateUpdateSubcategoryComponent', () => {
  let component: CreateUpdateSubcategoryComponent;
  let fixture: ComponentFixture<CreateUpdateSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateSubcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
