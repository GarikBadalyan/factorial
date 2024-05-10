
let arr = ["aram", "armen", "karen", "hamo", "Saqo"];

let menu = document.getElementById("menu");

for (let i = 1; i <= 5; i++) {
  let menuItem = document.createElement("div");
  menuItem.className = "menuItem";
  menu.appendChild(menuItem);
  menuItem.innerHTML = arr[Math.floor(Math.random() * arr.length)];

  menuItem.innerHTML = arr[Math.floor(Math.random() * arr.length)];

  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  menuItem.style.color = `rgb(${red},${green},${blue} `;
  menuItem.style.fontSize = Math.floor(14 + Math.random() * 40) + "px";
}

