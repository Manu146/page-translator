"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LanguageSelector {
    constructor(observable, element, languages) {
        this.observable = observable;
        this.element = element;
        this.languages = languages;
        this.renderOptions();
        this.update();
    }
    update() {
        let selected = this.observable.getLanguage();
        this.element.innerHTML = selected.slice(0, 2);
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
        const list = document.getElementById("dropdown");
        if (list != null && list instanceof HTMLElement) {
            this.languages.forEach((language) => {
                let listElement = document.createElement("li");
                let button = document.createElement("button");
                button.classList.add("language-btn");
                button.value = language;
                button.innerHTML = language.slice(0, 2);
                button.addEventListener("click", (e) => {
                    if (e.target) {
                        this.observable.changeLanguage(e.target.value);
                    }
                });
                listElement.appendChild(button);
                list.appendChild(listElement);
            });
        }
    }
}
exports.default = LanguageSelector;
