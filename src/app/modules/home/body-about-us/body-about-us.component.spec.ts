import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAboutUsComponent } from './body-about-us.component';

describe('BodyAboutUsComponent', () => {
  let component: BodyAboutUsComponent;
  let fixture: ComponentFixture<BodyAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyAboutUsComponent]
    });
    fixture = TestBed.createComponent(BodyAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
