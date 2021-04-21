"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TranslateObservable {
    constructor(language) {
        this.subscribers = [];
        this.language = "";
        this.language = language;
    }
    attach(o) {
        this.subscribers.push(o);
    }
    detach(o) {
        this.subscribers = this.subscribers.filter((obs) => o !== obs);
    }
    changeLanguage(language) {
        this.language = language;
        this.notify();
    }
    getLanguage() {
        return this.language;
    }
    notify() {
        for (let subscriptor of this.subscribers) {
            subscriptor.update();
        }
    }
}
exports.default = TranslateObservable;
