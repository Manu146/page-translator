"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TranslateObservable_1 = __importDefault(require("./TranslateObservable"));
const TranslateSubscriber_1 = __importDefault(require("./TranslateSubscriber"));
const translateData_json_1 = __importDefault(require("./translateData.json"));
let title = document.getElementById("title");
let paragraph1 = document.getElementById("paragraph1");
let paragraph2 = document.getElementById("paragraph2");
let buttons = document.getElementsByClassName("language-btn");
let translateOb = new TranslateObservable_1.default();
let s1 = new TranslateSubscriber_1.default(translateOb, title, translateData_json_1.default["title"]);
let s2 = new TranslateSubscriber_1.default(translateOb, paragraph1, translateData_json_1.default["paragraph1"]);
let s3 = new TranslateSubscriber_1.default(translateOb, paragraph2, translateData_json_1.default["paragraph2"]);
translateOb.attach(s1);
translateOb.attach(s2);
Array.from(buttons).forEach((button) => {
    button === null || button === void 0 ? void 0 : button.addEventListener("click", (e) => {
        let element = e.target;
        translateOb.changeLanguage(element.value);
    });
});
