import { Component, OnInit } from '@angular/core';
import { StopWatch } from './../../models/stopWatch';

@Component({
  selector: 'app-new-stop-watch',
  templateUrl: './new-stop-watch.component.html',
  styleUrls: ['./new-stop-watch.component.sass']
})
export class NewStopWatchComponent implements OnInit {
  StopWatch = new StopWatch(0);
  constructor() { }

  ngOnInit() {
  }

}
