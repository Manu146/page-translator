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
    let selected = (this.observable as TranslateObservable).getLanguage();
    this.element.innerHTML = selected;
    let buttons: HTMLCollection = document.getElementsByClassName(
      "language-btn"
    );
    Array.from(buttons).forEach((button) => {
      if ((button as HTMLButtonElement).value === selected)
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
      listElement?.appendChild(button);
      list?.appendChild(listElement);
    });
  }
}
