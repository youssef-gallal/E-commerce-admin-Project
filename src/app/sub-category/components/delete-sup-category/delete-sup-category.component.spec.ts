import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSupCategoryComponent } from './delete-sup-category.component';

describe('DeleteSupCategoryComponent', () => {
  let component: DeleteSupCategoryComponent;
  let fixture: ComponentFixture<DeleteSupCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteSupCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteSupCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
