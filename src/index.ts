import TranslateObservable from "./TranslateObservable";
import TranslateSubscriber from "./TranslateSubscriber";
import translateData from "./translateData.json";

let title: HTMLElement = document.getElementById("title")!;
let paragraph1: HTMLElement = document.getElementById("paragraph1")!;
let paragraph2: HTMLElement = document.getElementById("paragraph2")!;

let buttons: HTMLCollection = document.getElementsByClassName("language-btn")!;

let translateOb = new TranslateObservable();
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

translateOb.attach(s1);
translateOb.attach(s2);

Array.from(buttons).forEach((button) => {
  button?.addEventListener("click", (e: Event) => {
    let element = e.target as HTMLInputElement;
    translateOb.changeLanguage(element.value);
  });
});
