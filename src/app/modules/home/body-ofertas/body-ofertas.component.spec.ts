import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOfertasComponent } from './body-ofertas.component';

describe('BodyOfertasComponent', () => {
  let component: BodyOfertasComponent;
  let fixture: ComponentFixture<BodyOfertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyOfertasComponent]
    });
    fixture = TestBed.createComponent(BodyOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
