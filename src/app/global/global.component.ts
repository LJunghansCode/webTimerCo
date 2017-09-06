import { ViewChild, ElementRef, Component, OnInit, AfterViewInit } from '@angular/core';
import { TimerServiceService } from './../timer-service.service';
import * as moment from 'moment-timezone';
@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.sass']
})
export class GlobalComponent implements OnInit , AfterViewInit{
  clocks: {name: string, time: string}[];
  constructor(private timerService: TimerServiceService) { }
  ngOnInit() {
    this.timerService.globalClock
      .subscribe(
        (clocks) => {
          this.clocks = clocks;
        }
      );
      this.timerService.startGlobalClocks();

  }
  ngAfterViewInit() {
    // for ( let i = 0; i <= this.clocks.length - 1; i++) {
    //     this.timerService.drawClock(this.clocks[i].name, this.clocks[i].time);
    //   }
  }

}
