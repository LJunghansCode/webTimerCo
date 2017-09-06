import { Component, OnInit } from '@angular/core';
import { TimerServiceService } from './../timer-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  currTime: string;
  constructor(private timerService: TimerServiceService) { }

  ngOnInit() {
    this.timerService.pubTime
      .subscribe(
        (currTime) => {
          this.currTime = currTime;
        }
      );
      this.timerService.startClock();
      this.timerService.drawClock('mainClock');
  }

}
