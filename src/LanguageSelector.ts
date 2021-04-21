import Observable from "./Observable";
import Observer from "./Observer";
import TranslateObservable from "./TranslateObservable";

export default class LanguageSelector implements Observer {
  private observable: Observable;
  private element: HTMLElement;
  private languages: string[];
  constructor(
    observable: Observable,
    element: HTMLElement,
    languages: string[]
  ) {
    this.observable = observable;
    this.element = element;
    this.languages = languages;
    this.update();
    this.renderOptions();
  }

  update() {
    this.element.innerHTML = (this
      .observable as TranslateObservable).getLanguage();
  }

  renderOptions() {
    let list = document.getElementById("dropdown");
    this.languages.forEach((language) => {
      let listElement = document.createElement("li");
      let button = document.createElement("button");
      button.classList.add("language-btn");
      button.value = language;
      button.innerHTML = language;
      listElement?.appendChild(button);
      list?.appendChild(listElement);
    });
  }
}
