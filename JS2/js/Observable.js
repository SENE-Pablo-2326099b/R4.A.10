export default class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(obs) {
        this.observers.push(obs);
    }

    notify(value) {
        this.observers.forEach(o => o.update(value));
    }
}
