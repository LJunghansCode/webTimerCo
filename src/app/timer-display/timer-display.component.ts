import { Component, OnInit } from '@angular/core';
import { TimerServiceService } from './../timer-service.service';

import * as moment from 'moment';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.sass']
})
export class TimerDisplayComponent implements OnInit {
  constructor(private timerService: TimerServiceService) { }

  ngOnInit() {
  }

}
 