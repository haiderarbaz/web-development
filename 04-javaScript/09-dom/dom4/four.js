function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
}
addLanguage("Java");
addLanguage("Python");
addLanguage("TypeScript");

// optimize way
function addOptiLanguage(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}
addOptiLanguage("golang");

// Edit

// first way
const thirdLang = document.querySelector("li:nth-child(3)");
console.log(thirdLang);

// this only change the inner html
// thirdLang.innerHTML = "Rust";

// this will create a new li element and replace with the existing li element
const newLi = document.createElement("li");
newLi.textContent = "Rust";
thirdLang.replaceWith(newLi);

// second way
const firstLang = document.querySelector("li:first-child");
console.log(firstLang);

firstLang.outerHTML = "<li>JS</li>";

// Remove

const lastLang = document.querySelector("li:last-child");
lastLang.remove();
