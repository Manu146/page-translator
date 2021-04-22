"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LanguageSelector {
    constructor(observable, element, languages) {
        this.observable = observable;
        this.element = element;
        this.languages = languages;
        this.update();
        this.renderOptions();
    }
    update() {
        let selected = this.observable.getLanguage();
        this.element.innerHTML = selected;
        let buttons = document.getElementsByClassName("language-btn");
        Array.from(buttons).forEach((button) => {
            if (button.value === selected)
                button.classList.add("hidden");
            else if (button.classList.contains("hidden")) {
                button.classList.remove("hidden");
            }
        });
    }
    renderOptions() {
        let list = document.getElementById("dropdown");
        this.languages.forEach((language) => {
            let listElement = document.createElement("li");
            let button = document.createElement("button");
            button.classList.add("language-btn");
            button.value = language;
            button.innerHTML = language;
            listElement === null || listElement === void 0 ? void 0 : listElement.appendChild(button);
            list === null || list === void 0 ? void 0 : list.appendChild(listElement);
        });
    }
}
exports.default = LanguageSelector;
