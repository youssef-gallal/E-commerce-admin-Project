import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparentComponent } from './transparent.component';

describe('TransparentComponent', () => {
  let component: TransparentComponent;
  let fixture: ComponentFixture<TransparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
