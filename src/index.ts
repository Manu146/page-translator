import TranslateObservable from "./TranslateObservable";
import TranslateSubscriber from "./TranslateSubscriber";
import LanguageSelector from "./LanguageSelector";
import { Language, TranslationsData } from "./types";

export default function initTranslator(translateData: TranslationsData) {
  let languages: Language[] = Object.keys(
    translateData[Object.keys(translateData)[0]]
  );
  let defaultLanguage: Language = navigator.language || "en-US";
  defaultLanguage = defaultLanguage.replace("-", "_");
  if (!languages.includes(defaultLanguage)) defaultLanguage = "en_US";
  let translateOb = new TranslateObservable(defaultLanguage);
  let elements: NodeListOf<HTMLElement> = document.querySelectorAll(
    "[data-translatable]"
  );

  if (elements.length > 0) {
    elements.forEach((element) => {
      let key = element.getAttribute("data-translatable");
      if (key) {
        let subscriber = new TranslateSubscriber(
          translateOb,
          element,
          translateData[key]
        );
        translateOb.attach(subscriber);
      }
    });
  }

  let selectorEl = document.getElementById("lang-selector");

  if (selectorEl instanceof HTMLElement) {
    let selector = new LanguageSelector(translateOb, selectorEl, languages);
    translateOb.attach(selector);
  }

  translateOb.notify();
}
