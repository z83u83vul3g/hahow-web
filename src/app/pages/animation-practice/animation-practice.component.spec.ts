import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationPracticeComponent } from './animation-practice.component';

describe('AnimationPraticeComponent', () => {
  let component: AnimationPracticeComponent;
  let fixture: ComponentFixture<AnimationPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
