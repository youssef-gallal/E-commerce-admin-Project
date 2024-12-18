import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BredCrumpComponent } from './bred-crump.component';

describe('BredCrumpComponent', () => {
  let component: BredCrumpComponent;
  let fixture: ComponentFixture<BredCrumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BredCrumpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BredCrumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
