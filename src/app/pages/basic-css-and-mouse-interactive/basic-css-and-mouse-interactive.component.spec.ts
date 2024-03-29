import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCssAndMouseInteractiveComponent } from './basic-css-and-mouse-interactive.component';

describe('BasicCssAndMouseInteractiveComponent', () => {
  let component: BasicCssAndMouseInteractiveComponent;
  let fixture: ComponentFixture<BasicCssAndMouseInteractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCssAndMouseInteractiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicCssAndMouseInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
