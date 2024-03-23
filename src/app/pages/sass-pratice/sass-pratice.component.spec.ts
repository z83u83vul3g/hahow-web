import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassPraticeComponent } from './sass-pratice.component';

describe('SassPraticeComponent', () => {
  let component: SassPraticeComponent;
  let fixture: ComponentFixture<SassPraticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SassPraticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SassPraticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
