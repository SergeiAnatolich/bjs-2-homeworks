class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    
    addClock(time, callback, id) {
        if(id === undefined) {
            throw new Error('id не передан');
        }
        let obj = this.alarmCollection.find(element => element.id === id);
        if(obj != undefined) {
            console.error("Будильник с таким id уже существует");
        } else {
            this.alarmCollection.push({id, time, callback});
        }
    }

    removeClock(id) {
        let initialAlarmCollection = this.alarmCollection.length;
        let temp = this.alarmCollection.filter(item => item.id != id);
        this.alarmCollection = temp;
        let finalAlarmCollection = this.alarmCollection.length;
        return (!(initialAlarmCollection === finalAlarmCollection))
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-3);
    }

    start() {
        if(this.timerId === null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(element => this.checkClock(element)), 1000);
        }
    }

    checkClock(element) {
        if(element.time === this.getCurrentFormattedTime()) {
          element.callback();
        }
      }

    stop() {
        if(this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(element => {
            console.log(`будильник №${element.id} заведен на ${element.time}`);
        });
    }

    clearAlarms() {
        this.printAlarms();
        this.stop();
        this.alarmCollection = [];
        this.printAlarms();
    }
}