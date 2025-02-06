const div = document.createElement("div");
console.log(div);

div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "first title");
div.style.backgroundColor = "#5F9EA0";
div.style.padding = "15px";
div.style.borderRadius = "10px";

div.innerText = "DOM - How to create a Element";

// const addText = document.createTextNode("DOM - How to create a Element");
// div.appendChild(addText);

document.body.appendChild(div);
