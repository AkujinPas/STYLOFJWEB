import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HflayoutComponent } from './hflayout.component';

describe('HflayoutComponent', () => {
  let component: HflayoutComponent;
  let fixture: ComponentFixture<HflayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HflayoutComponent]
    });
    fixture = TestBed.createComponent(HflayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
