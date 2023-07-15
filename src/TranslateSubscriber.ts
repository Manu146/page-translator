import Observable from "./Observable";
import Observer from "./Observer";
import TranslateObservable from "./TranslateObservable";
import { Translations } from "./types";

export default class TranslateSubscriber implements Observer {
  private observable: Observable;
  private element: HTMLElement;
  private translations: Translations;
  constructor(
    observable: Observable,
    element: HTMLElement,
    translations: Translations
  ) {
    this.observable = observable;
    this.element = element;
    this.translations = translations;
  }
  update() {
    this.element.innerHTML =
      this.translations[(this.observable as TranslateObservable).getLanguage()];
  }
}
