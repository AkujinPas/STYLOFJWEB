import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAccesoriesComponent } from './body-accesories.component';

describe('BodyAccesoriesComponent', () => {
  let component: BodyAccesoriesComponent;
  let fixture: ComponentFixture<BodyAccesoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyAccesoriesComponent]
    });
    fixture = TestBed.createComponent(BodyAccesoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
