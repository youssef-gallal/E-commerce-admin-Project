import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateTagComponent } from './create-update-tag.component';

describe('CreateUpdateTagComponent', () => {
  let component: CreateUpdateTagComponent;
  let fixture: ComponentFixture<CreateUpdateTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
