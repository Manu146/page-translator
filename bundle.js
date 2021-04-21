(() => {
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);

  // dist/TranslateObservable.js
  var require_TranslateObservable = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var TranslateObservable = class {
      constructor(language) {
        this.subscribers = [];
        this.language = "";
        this.language = language;
      }
      attach(o) {
        this.subscribers.push(o);
      }
      detach(o) {
        this.subscribers = this.subscribers.filter((obs) => o !== obs);
      }
      changeLanguage(language) {
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
    };
    exports.default = TranslateObservable;
  });

  // dist/TranslateSubscriber.js
  var require_TranslateSubscriber = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var TranslateSubscriber = class {
      constructor(observable, element, translations) {
        this.observable = observable;
        this.element = element;
        this.translations = translations;
      }
      update() {
        this.element.innerHTML = this.translations[this.observable.getLanguage()];
      }
    };
    exports.default = TranslateSubscriber;
  });

  // dist/translateData.json
  var require_translateData = __commonJS((exports, module) => {
    module.exports = {
      title: {
        en: "Hello world",
        es: "Hola mundo",
        pt: "\xD3la mundo"
      },
      paragraph1: {
        en: "This example is using page-translator.",
        es: "Este ejemplo esta utilizando page-translator.",
        pt: "Este exemplo est\xE1 utilizando page-translator"
      },
      paragraph2: {
        en: "Test one",
        es: "Prueba uno",
        pt: "Tente um"
      }
    };
  });

  // dist/LanguageSelector.js
  var require_LanguageSelector = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var LanguageSelector = class {
      constructor(observable, element, languages) {
        this.observable = observable;
        this.element = element;
        this.languages = languages;
        this.update();
        this.renderOptions();
      }
      update() {
        this.element.innerHTML = this.observable.getLanguage();
      }
      renderOptions() {
        let list = document.getElementById("dropdown");
        this.languages.forEach((language) => {
          let listElement = document.createElement("li");
          let button = document.createElement("button");
          button.classList.add("language-btn");
          button.value = language;
          button.innerHTML = language;
          listElement === null || listElement === void 0 ? void 0 : listElement.appendChild(button);
          list === null || list === void 0 ? void 0 : list.appendChild(listElement);
        });
      }
    };
    exports.default = LanguageSelector;
  });

  // dist/languages.json
  var require_languages = __commonJS((exports, module) => {
    module.exports = ["en", "es", "pt"];
  });

  // dist/index.js
  var require_dist = __commonJS((exports) => {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {default: mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var TranslateObservable_1 = __importDefault(require_TranslateObservable());
    var TranslateSubscriber_1 = __importDefault(require_TranslateSubscriber());
    var translateData_json_1 = __importDefault(require_translateData());
    var LanguageSelector_1 = __importDefault(require_LanguageSelector());
    var languages_json_1 = __importDefault(require_languages());
    var title = document.getElementById("title");
    var paragraph1 = document.getElementById("paragraph1");
    var paragraph2 = document.getElementById("paragraph2");
    var selectedLang = document.getElementById("selected-language");
    var translateOb = new TranslateObservable_1.default("en");
    var s1 = new TranslateSubscriber_1.default(translateOb, title, translateData_json_1.default["title"]);
    var s2 = new TranslateSubscriber_1.default(translateOb, paragraph1, translateData_json_1.default["paragraph1"]);
    var s3 = new TranslateSubscriber_1.default(translateOb, paragraph2, translateData_json_1.default["paragraph2"]);
    var selector = new LanguageSelector_1.default(translateOb, selectedLang, languages_json_1.default);
    var buttons = document.getElementsByClassName("language-btn");
    translateOb.attach(s1);
    translateOb.attach(s2);
    translateOb.attach(s3);
    translateOb.attach(selector);
    translateOb.notify();
    Array.from(buttons).forEach((button) => {
      button === null || button === void 0 ? void 0 : button.addEventListener("click", (e) => {
        let element = e.target;
        translateOb.changeLanguage(element.value);
      });
    });
  });
  require_dist();
})();
