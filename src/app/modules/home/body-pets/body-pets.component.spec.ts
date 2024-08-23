import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPetsComponent } from './body-pets.component';

describe('BodyPetsComponent', () => {
  let component: BodyPetsComponent;
  let fixture: ComponentFixture<BodyPetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyPetsComponent]
    });
    fixture = TestBed.createComponent(BodyPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
