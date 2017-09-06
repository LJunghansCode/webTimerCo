import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTimerComponent } from './new-timer.component';

describe('NewTimerComponent', () => {
  let component: NewTimerComponent;
  let fixture: ComponentFixture<NewTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
