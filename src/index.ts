import TranslateObservable from "./TranslateObservable";
import TranslateSubscriber from "./TranslateSubscriber";
import translateData from "./translateData.json";
import LanguageSelector from "./LanguageSelector";
import languages from "./languages.json";

let title: HTMLElement = document.getElementById("title")!;
let paragraph1: HTMLElement = document.getElementById("paragraph1")!;
let paragraph2: HTMLElement = document.getElementById("paragraph2")!;
let selectedLang: HTMLElement = document.getElementById("selected-language")!;

let translateOb = new TranslateObservable("en");
let s1 = new TranslateSubscriber(translateOb, title, translateData["title"]);
let s2 = new TranslateSubscriber(
  translateOb,
  paragraph1,
  translateData["paragraph1"]
);
let s3 = new TranslateSubscriber(
  translateOb,
  paragraph2,
  translateData["paragraph2"]
);

let selector = new LanguageSelector(translateOb, selectedLang, languages);
let buttons: HTMLCollection = document.getElementsByClassName("language-btn")!;

translateOb.attach(s1);
translateOb.attach(s2);
translateOb.attach(s3);
translateOb.attach(selector);

translateOb.notify();

Array.from(buttons).forEach((button) => {
  button?.addEventListener("click", (e: Event) => {
    let element = e.target as HTMLInputElement;
    translateOb.changeLanguage(element.value);
  });
});
