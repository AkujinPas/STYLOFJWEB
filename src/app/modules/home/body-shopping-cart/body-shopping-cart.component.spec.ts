import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyShoppingCartComponent } from './body-shopping-cart.component';

describe('BodyShoppingCartComponent', () => {
  let component: BodyShoppingCartComponent;
  let fixture: ComponentFixture<BodyShoppingCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyShoppingCartComponent]
    });
    fixture = TestBed.createComponent(BodyShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
