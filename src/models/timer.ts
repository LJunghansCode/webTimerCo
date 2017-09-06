import * as moment from 'moment';
export class Timer {
    position: number;
    length: number;
    timeLeft: number;
    timer: any;
    title: string;
    initialLength: number;
    constructor(length, title) {
        this.title = title;
        this.length = length;
        this.timeLeft = moment.now() - this.length;
     }

}
