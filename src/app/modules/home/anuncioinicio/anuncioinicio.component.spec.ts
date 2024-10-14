import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioinicioComponent } from './anuncioinicio.component';

describe('AnuncioinicioComponent', () => {
  let component: AnuncioinicioComponent;
  let fixture: ComponentFixture<AnuncioinicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnuncioinicioComponent]
    });
    fixture = TestBed.createComponent(AnuncioinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
