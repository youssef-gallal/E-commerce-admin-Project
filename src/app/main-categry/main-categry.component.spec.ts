import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAinCategryComponent } from './main-categry.component';

describe('MAinCategryComponent', () => {
  let component: MAinCategryComponent;
  let fixture: ComponentFixture<MAinCategryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MAinCategryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MAinCategryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
