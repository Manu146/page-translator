import Observable from "./Observable";
import Observer from "./Observer";

export default class TranslateObservable implements Observable {
  private subscribers: Observer[] = [];
  private language: string = "es";

  attach(o: Observer) {
    this.subscribers.push(o);
  }

  detach(o: Observer) {
    this.subscribers = this.subscribers.filter((obs: Observer) => o !== obs);
  }

  changeLanguage(language: string) {
    this.language = language;
    this.notify();
  }

  getLanguage() {
    return this.language;
  }

  notify() {
    for (let subscriptor of this.subscribers) {
      subscriptor.update();
    }
  }
}
