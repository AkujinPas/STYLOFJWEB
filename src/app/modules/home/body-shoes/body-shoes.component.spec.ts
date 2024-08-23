import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyShoesComponent } from './body-shoes.component';

describe('BodyShoesComponent', () => {
  let component: BodyShoesComponent;
  let fixture: ComponentFixture<BodyShoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyShoesComponent]
    });
    fixture = TestBed.createComponent(BodyShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
