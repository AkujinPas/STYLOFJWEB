import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressProcessComponent } from './address-process.component';

describe('AddressProcessComponent', () => {
  let component: AddressProcessComponent;
  let fixture: ComponentFixture<AddressProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressProcessComponent]
    });
    fixture = TestBed.createComponent(AddressProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
