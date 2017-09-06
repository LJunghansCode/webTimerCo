import { Component, OnInit } from '@angular/core';
import { TimerServiceService } from './../timer-service.service';
import * as moment from 'moment';
import { TimePipe } from './../time.pipe';
import { Timer } from './../../models/timer';

@Component({
  selector: 'app-all-timers',
  templateUrl: './all-timers.component.html',
  styleUrls: ['./all-timers.component.sass']
})
export class AllTimersComponent implements OnInit {
  myTimers: Timer[];
  constructor(private timerService: TimerServiceService) { }

  ngOnInit() {
    this.timerService.currentRunningTimers
    .subscribe(
      (timers) => {
        this.myTimers = timers;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  timerToPop(i) {
  if (i === 0) {
    return 'active';
  }
  }
  deleteTimer(timer) {
   this.timerService.stopTimer(timer);
  }
}
