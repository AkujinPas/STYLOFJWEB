import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySignUpComponent } from './body-sign-up.component';

describe('BodySignUpComponent', () => {
  let component: BodySignUpComponent;
  let fixture: ComponentFixture<BodySignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodySignUpComponent]
    });
    fixture = TestBed.createComponent(BodySignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
