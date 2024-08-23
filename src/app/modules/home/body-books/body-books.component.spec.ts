import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBooksComponent } from './body-books.component';

describe('BodyBooksComponent', () => {
  let component: BodyBooksComponent;
  let fixture: ComponentFixture<BodyBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyBooksComponent]
    });
    fixture = TestBed.createComponent(BodyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
