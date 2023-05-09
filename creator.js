const creator = document.querySelector("#kitten-creator");
const userKittens = [];

const uiElements = {
  name: null,
  url: null,
  gender: null,
};

let template = {
  name: "",
  image: "",
  gender: "",
};

function main() {
  renderEditor();
}

function resetForm() {
  uiElements.gender.value = "gender";
  uiElements.name.value = "";
  uiElements.url.value = "";
}

function handleNameChange(event) {
  template.name = event.target.value;
}

function handleUrlChange(event) {
  template.image = event.target.value;
}

function handleGenderChange(event) {
  template.gender = event.target.value;
}

function handleSubmit(event) {
  event.preventDefault();

  userKittens.push({
    name: template.name,
    image: template.image,
    gender: template.gender,
  });

  // reset the template
  template = {};

  resetForm();
  renderKittens();
  /*
    // shallow copy
    // spread operator ...
    userKittens.push({...template});
    */

  /*
    // deep copy
    userKittenspush(structuredClone(template));
    */
}

function renderEditor() {
  const form = create("form", { className: "kitten-form" });

  const name = create("input", {
    type: "text",
    placeholder: "Name of the cat",
    className: "control",
  });

  const url = create("input", {
    type: "text",
    placeholder: "Image of the cat",
    className: "control",
  });

  const genderSelector = create("select", {
    className: "control",
  });

  each(["gender", "hím", "nőstény"], function (gender) {
    const option = create("option", { innerText: gender, value: gender });
    genderSelector.append(option);
  });

  const submit = create("button", { type: "submit", innerText: "submit" });

  form.append(name, url, genderSelector, submit);
  creator.append(form);

  uiElements.gender = genderSelector;
  uiElements.name = name;
  uiElements.url = url;

  name.addEventListener("input", handleNameChange);
  url.addEventListener("input", handleUrlChange);
  genderSelector.addEventListener("change", handleGenderChange);
  form.addEventListener("submit", handleSubmit);
}

function renderKittens() {
  const kittenElements = userKittens.map(createKittenEl);
  
  const container = getOrCreateKittenContainer();
  container.innerHTML = "";
  container.append(...kittenElements);
}

function createKittenEl(kitten) {
  const div = create("div", {});

  const h2 = create("h2", { innerText: `${kitten.name} / ${kitten.gender}` });
  const img = create("img", { src: kitten.image });

  div.append(h2, img);

  return div;
}

function getOrCreateKittenContainer() {
  let kittensContainer = document.querySelector('#kittens-container');
  
  if (kittensContainer === null) {
    kittensContainer = create('div', { id: 'kittens-container' });
    creator.append(kittensContainer);
  }

  return kittensContainer;
}

main();
