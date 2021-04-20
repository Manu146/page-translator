"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TranslateSubscriber {
    constructor(observable, element, translations) {
        this.observable = observable;
        this.element = element;
        this.translations = translations;
    }
    update() {
        console.log("language changed");
        this.element.innerHTML = this.translations[this.observable.getLanguage()];
    }
}
exports.default = TranslateSubscriber;
