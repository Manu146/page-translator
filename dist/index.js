"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TranslateObservable_1 = __importDefault(require("./TranslateObservable"));
const TranslateSubscriber_1 = __importDefault(require("./TranslateSubscriber"));
const LanguageSelector_1 = __importDefault(require("./LanguageSelector"));
function initTranslator(translateData) {
    let languages = Object.keys(translateData[Object.keys(translateData)[0]]);
    let defaultLanguage = navigator.language || "en-US";
    defaultLanguage = defaultLanguage.replace("-", "_");
    if (!languages.includes(defaultLanguage))
        defaultLanguage = "en_US";
    let translateOb = new TranslateObservable_1.default(defaultLanguage);
    let elements = document.querySelectorAll("[data-translatable]");
    if (elements.length > 0) {
        elements.forEach((element) => {
            let key = element.getAttribute("data-translatable");
            if (key) {
                let subscriber = new TranslateSubscriber_1.default(translateOb, element, translateData[key]);
                translateOb.attach(subscriber);
            }
        });
    }
    let selectorEl = document.getElementById("lang-selector");
    if (selectorEl instanceof HTMLElement) {
        let selector = new LanguageSelector_1.default(translateOb, selectorEl, languages);
        translateOb.attach(selector);
    }
    translateOb.notify();
}
exports.default = initTranslator;
