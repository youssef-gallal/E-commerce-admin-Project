import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgOrangeComponent } from './bg-orange.component';

describe('BgOrangeComponent', () => {
  let component: BgOrangeComponent;
  let fixture: ComponentFixture<BgOrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgOrangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BgOrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
