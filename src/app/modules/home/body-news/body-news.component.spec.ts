import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyNewsComponent } from './body-news.component';

describe('BodyNewsComponent', () => {
  let component: BodyNewsComponent;
  let fixture: ComponentFixture<BodyNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyNewsComponent]
    });
    fixture = TestBed.createComponent(BodyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
