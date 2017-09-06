import * as moment from 'moment';

export class StopWatch {
    value: string;
    running: boolean;
    timer: any;
    valueNum: number;
    constructor(valueNum) {
        this.valueNum = valueNum;
        this.value = moment(this.valueNum).format('mm:ss');
        this.running = false;
     }
     start() {
      if ( !this.running ) {
            this.running = true;
            this.timer = window.setInterval(() => {
                this.valueNum += 1000;
                this.value = moment(this.valueNum).format('mm:ss');
            }, 1000);
        }
     }
     stop() {
         this.running = false;
         window.clearInterval(this.timer);
     }
     reset() {
         this.valueNum = 0;
         this.value = moment(this.valueNum).format('mm:ss');
     }
}
