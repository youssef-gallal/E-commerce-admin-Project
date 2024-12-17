import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategryComponent } from './sub-categry.component';

describe('SubCategryComponent', () => {
  let component: SubCategryComponent;
  let fixture: ComponentFixture<SubCategryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubCategryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubCategryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
