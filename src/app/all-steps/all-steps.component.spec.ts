import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStepsComponent } from './all-steps.component';

describe('AllStepsComponent', () => {
  let component: AllStepsComponent;
  let fixture: ComponentFixture<AllStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllStepsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
