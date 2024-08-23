import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFashionComponent } from './body-fashion.component';

describe('BodyFashionComponent', () => {
  let component: BodyFashionComponent;
  let fixture: ComponentFixture<BodyFashionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyFashionComponent]
    });
    fixture = TestBed.createComponent(BodyFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
