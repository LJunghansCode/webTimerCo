import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimersComponent } from './all-timers.component';

describe('AllTimersComponent', () => {
  let component: AllTimersComponent;
  let fixture: ComponentFixture<AllTimersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTimersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
