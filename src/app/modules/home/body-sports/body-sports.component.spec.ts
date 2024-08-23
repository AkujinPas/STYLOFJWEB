import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySportsComponent } from './body-sports.component';

describe('BodySportsComponent', () => {
  let component: BodySportsComponent;
  let fixture: ComponentFixture<BodySportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodySportsComponent]
    });
    fixture = TestBed.createComponent(BodySportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
