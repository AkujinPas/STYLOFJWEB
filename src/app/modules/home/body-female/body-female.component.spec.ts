import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyFemaleComponent } from './body-female.component';

describe('BodyFemaleComponent', () => {
  let component: BodyFemaleComponent;
  let fixture: ComponentFixture<BodyFemaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyFemaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
