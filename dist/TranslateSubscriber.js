"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TranslateSubscriber {
    constructor(observable, element, translations) {
        this.observable = observable;
        this.element = element;
        this.translations = translations;
    }
    update() {
        this.element.innerHTML =
            this.translations[this.observable.getLanguage()];
    }
}
exports.default = TranslateSubscriber;
