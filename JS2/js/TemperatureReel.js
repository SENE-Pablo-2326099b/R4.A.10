import Observable from "./Observable.js";

export default class TemperatureReel extends Observable {
    constructor() {
        super();
        this.values = Array.from({ length: 20 }, () => Math.floor(Math.random() * 50) - 10);
        this.index = 0;
    }

    generer() {
        if (this.index < this.values.length) {
            this.notify(this.values[this.index++]);
        }
    }
}
