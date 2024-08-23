import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContactComponent } from './body-contact.component';

describe('BodyContactComponent', () => {
  let component: BodyContactComponent;
  let fixture: ComponentFixture<BodyContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyContactComponent]
    });
    fixture = TestBed.createComponent(BodyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
