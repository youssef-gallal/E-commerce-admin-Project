import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgRedComponent } from './bg-red.component';

describe('BgRedComponent', () => {
  let component: BgRedComponent;
  let fixture: ComponentFixture<BgRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgRedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BgRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
