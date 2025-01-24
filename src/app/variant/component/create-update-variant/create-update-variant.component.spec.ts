import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateVariantComponent } from './create-update-variant.component';

describe('CreateUpdateVariantComponent', () => {
  let component: CreateUpdateVariantComponent;
  let fixture: ComponentFixture<CreateUpdateVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateVariantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
