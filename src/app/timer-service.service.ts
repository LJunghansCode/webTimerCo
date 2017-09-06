import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment-timezone';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Timer } from './../models/timer';

@Injectable()
export class TimerServiceService {
  // Timer Truth
  private currTime = new BehaviorSubject(moment().format('MMMM Do YYYY, h:mm:ss a'));
  public pubTime = this.currTime.asObservable();
  private runningTimersSource = new BehaviorSubject([]);
  public currentRunningTimers = this.runningTimersSource.asObservable();
  // Global Clocks
  // Defaults : New-York // Hong-Kong // Mumbai // Paris // Seattle
  Seattle = moment.tz('America/Vancouver').format('DD-MM hh:mm:ss a');
  Paris = moment.tz('Europe/Paris').format('DD-MM hh:mm:ss a');
  Mumbai = moment.tz('Indian/Maldives').format('DD-MM hh:mm:ss a');
  Hong_Kong = moment.tz('Asia/Hong_Kong').format('DD-MM hh:mm:ss a');
  New_York = moment.tz('America/New_York').format('DD-MM hh:mm:ss a');
  private globalTimersObs= new BehaviorSubject([
    {name: 'Seattle', time: this.Seattle},
    {name: 'Paris', time: this.Paris},
    {name: 'Mumbai', time: this.Mumbai},
    {name: 'Hong Kong', time: this.Hong_Kong},
    {name: 'New York', time: this.New_York}
  ]);
  public globalClock = this.globalTimersObs.asObservable();
  constructor() { }
  startGlobalClocks() {
    window.setInterval(() => {
      this.globalTimersObs.next(this.calculateGlobalTime());
    }, 1000);
  }
  calculateGlobalTime() {
    const GlobalClocksArray = [
    {name: 'Seattle', time: moment.tz('America/Vancouver').format('hh:mm:ss a')},
    {name: 'Paris', time: moment.tz('Europe/Paris').format('hh:mm:ss a')},
    {name: 'Mumbai', time: moment.tz('Indian/Maldives').format('hh:mm:ss a')},
    {name: 'Hong Kong', time: moment.tz('Asia/Hong_Kong').format('hh:mm:ss a')},
    {name: 'New York', time: moment.tz('America/New_York').format('hh:mm:ss a')}
  ];
  return GlobalClocksArray;
  }
  startTimer(timer) {
    timer.timer = window.setInterval(() => {
    if (timer.length === 1000) {
        this.stopTimer(timer);
        }
      timer.length -= 1000;
    }, 1000);
  }
  stopTimer(timer) {
    this.runningTimersSource.value.splice(timer.position, 1);
    this.resetTimerPos();
    if (timer.length === 1000) {
      const alarm = new Audio('./../assets/doorChime.mp3');
      alarm.play();
    } else {
      const deleted = new Audio('./../assets/paper-rip.mp3');
      deleted.volume = 0.1;
      deleted.play();
    }
    window.clearInterval(timer.timer);
  }
  pauseTimer(timer) {
    window.clearInterval(timer.timer);
  }
  resetTimerPos() {
    const timers = this.runningTimersSource.value;
    for (let i = 0; i <= timers.length - 1; i++) {
      timers[i].position = i;
    }
  }
  addTimer(timer) {
    timer.timeLeft = moment(moment.now() + timer.length).format('MMM Do YYYY, h:mm:ss a');
    const timeArr = this.runningTimersSource.value;
    if (timeArr.length === 0) {
      timer.position = 0;
    } else {
      timer.position = timeArr.length;
    }
    timeArr.push(timer);
    this.startTimer(timer);
  }
  startClock() {
    window.setInterval(() => {
      moment.locale();
      this.currTime.next(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);
  }




  // DRAW CLOCK
  drawClock(name) {
  const canvas = <HTMLCanvasElement> document.getElementById(name);
  const ctx = canvas.getContext('2d');
  let radius = canvas.height / 2;
  ctx.translate(radius, radius);
  radius = radius * 0.90;
  setInterval(drawClock, 1000);

  function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
  }

  function drawFace(ctx, radius) {
    let grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0,  0 , radius * 0.95,  0,  0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
  }

  function drawNumbers(ctx, radius) {
    let ang;
    let num;
    ctx.font = radius * 0.15 + 'px arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    for (num = 1; num < 13; num++){
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  function drawTime(ctx, radius){
      const now = new Date();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();
      // hour
      hour = hour % 12;
      hour = (hour * Math.PI / 6) +
      (minute * Math.PI / (6 * 60)) +
      (second * Math.PI / (360 * 60));
      drawHand(ctx, hour, radius * 0.5, radius * 0.07);
      // minute
      minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
      drawHand(ctx, minute, radius * 0.8, radius * 0.07);
      // second
      second = (second * Math.PI / 30);
      drawHand(ctx, second, radius * 0.9, radius * 0.02);
  }

  function drawHand(ctx, pos, length, width) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.moveTo(0, 0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
  }
  }
}
