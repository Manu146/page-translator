import initTranslator from "./dist/index";

fetch("./translateData.json")
  .then((res) => res.json())
  .then((data) => initTranslator(data));
