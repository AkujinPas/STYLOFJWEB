import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySignInComponent } from './body-sign-in.component';

describe('BodySignInComponent', () => {
  let component: BodySignInComponent;
  let fixture: ComponentFixture<BodySignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodySignInComponent]
    });
    fixture = TestBed.createComponent(BodySignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
