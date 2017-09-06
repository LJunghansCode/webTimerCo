import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder, Validators} from '@angular/forms';
import { TimerServiceService } from './../timer-service.service';
import { Timer } from './../../models/timer';
import * as moment from 'moment';

@Component({
  selector: 'app-new-timer',
  templateUrl: './new-timer.component.html',
  styleUrls: ['./new-timer.component.sass']
})
export class NewTimerComponent implements OnInit {

  public timerForm = this.fb.group({
    hours: [''],
    minutes: [''],
    seconds: [''],
    title: ['']
  });
  constructor( private fb: FormBuilder, private timerService: TimerServiceService) { }

  ngOnInit() {

  }
  queTimer() {
    const tf = this.timerForm.value;
    if (!tf.hours && !tf.minutes && !tf.seconds) {
      return;
    }
    const hours = tf.hours;
    const minutes = tf.minutes;
    const seconds = tf.seconds;
    // console.log('timer is:' + ' ' + hours + ':' + minutes + ':' + seconds)
    const miliConv = this.miliseconds(hours, minutes, seconds);
    const timerToAdd = new Timer(miliConv, tf.title);
    timerToAdd.initialLength = miliConv;
    this.timerService.addTimer(timerToAdd);
    this.timerForm.reset();

  }
  miliseconds(hrs, min, sec) {
    const hours = hrs * 3600000;
    const minutes = min * 60000;
    const seconds = sec * 1000;
    return(hours + minutes + seconds);
  }
}
