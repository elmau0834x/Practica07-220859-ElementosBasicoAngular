import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGreatComponent } from './button-great.component';

describe('ButtonGreatComponent', () => {
  let component: ButtonGreatComponent;
  let fixture: ComponentFixture<ButtonGreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGreatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
