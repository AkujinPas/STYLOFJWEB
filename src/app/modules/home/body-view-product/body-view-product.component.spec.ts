import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyViewProductComponent } from './body-view-product.component';

describe('BodyViewProductComponent', () => {
  let component: BodyViewProductComponent;
  let fixture: ComponentFixture<BodyViewProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyViewProductComponent]
    });
    fixture = TestBed.createComponent(BodyViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
