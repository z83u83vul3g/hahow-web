import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassPracticeComponent } from './sass-practice.component';

describe('SassPraticeComponent', () => {
  let component: SassPracticeComponent;
  let fixture: ComponentFixture<SassPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SassPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SassPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
