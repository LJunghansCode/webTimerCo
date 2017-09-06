import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStopWatchComponent } from './new-stop-watch.component';

describe('NewStopWatchComponent', () => {
  let component: NewStopWatchComponent;
  let fixture: ComponentFixture<NewStopWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStopWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStopWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
