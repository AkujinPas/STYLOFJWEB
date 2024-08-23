import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyHousewardComponent } from './body-houseward.component';

describe('BodyHousewardComponent', () => {
  let component: BodyHousewardComponent;
  let fixture: ComponentFixture<BodyHousewardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyHousewardComponent]
    });
    fixture = TestBed.createComponent(BodyHousewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
