import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBagsComponent } from './body-bags.component';

describe('BodyBagsComponent', () => {
  let component: BodyBagsComponent;
  let fixture: ComponentFixture<BodyBagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyBagsComponent]
    });
    fixture = TestBed.createComponent(BodyBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
