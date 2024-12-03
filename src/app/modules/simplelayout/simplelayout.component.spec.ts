import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplelayoutComponent } from './simplelayout.component';

describe('SimplelayoutComponent', () => {
  let component: SimplelayoutComponent;
  let fixture: ComponentFixture<SimplelayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimplelayoutComponent]
    });
    fixture = TestBed.createComponent(SimplelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
