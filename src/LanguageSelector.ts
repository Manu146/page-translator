import Observable from "./Observable";
import Observer from "./Observer";
import TranslateObservable from "./TranslateObservable";

export default class LanguageSelector implements Observer {
  private observable: TranslateObservable;
  private element: HTMLElement;
  private languages: string[];
  constructor(
    observable: TranslateObservable,
    element: HTMLElement,
    languages: string[]
  ) {
    this.observable = observable;
    this.element = element;
    this.languages = languages;
    this.renderOptions();
    this.update();
  }

  update() {
    let selected = this.observable.getLanguage();
    this.element.innerHTML = selected.slice(0, 2);
    let buttons: HTMLCollection =
      document.getElementsByClassName("language-btn");
    Array.from(buttons).forEach((button) => {
      if ((button as HTMLButtonElement).value === selected)
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
        button.addEventListener("click", (e: Event) => {
          if (e.target) {
            this.observable.changeLanguage(
              (e.target as HTMLButtonElement).value
            );
          }
        });
        listElement.appendChild(button);
        list.appendChild(listElement);
      });
    }
  }
}
