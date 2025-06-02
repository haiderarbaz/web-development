const parent = document.querySelector(".parent");
console.log(parent);

console.log(parent.children);
console.log(parent.children[0]);
console.log(parent.children[2]);
console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

parent.children[1].style.backgroundColor = "#5F9EA0";
parent.children[1].style.padding = "20px";
parent.children[1].style.borderRadius = "10px";

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("NODES: ", parent.childNodes);
