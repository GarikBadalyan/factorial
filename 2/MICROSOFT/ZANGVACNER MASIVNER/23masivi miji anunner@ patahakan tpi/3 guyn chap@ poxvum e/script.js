
let arr = ["aram", "armen", "karen", "hamo", "Saqo"];

function gorc(gum) {
  let s = "";
  let k = document.getElementById("cucak");
  for (let i = 0; i < arr.length; i++) {
    s +=  arr[Math.floor(Math.random() * arr.length)];
  }
  k.style.fontSize = Math.floor(14 + Math.random() * 40) + "px";

  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  k.style.color = `rgb(${red},${green},${blue} `;

  document.getElementById("cucak").innerHTML = s;
}
/*

let arr = ["aram", "armen", "karen", "hamo", "Saqo","ecfe","asefa","asefacq"];

let menu = document.getElementById("menu");

for (let i = 1; i <= 5; i++) {
  let menuItem = document.createElement("div");
  menuItem.className = "menuItem";
  menu.appendChild(menuItem);
  menuItem.innerHTML = arr[Math.floor(Math.random() * arr.length)];
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  menuItem.style.color = `rgb(${red},${green},${blue} `;
  menuItem.style.fontSize = Math.floor(14 + Math.random() * 40) + "px";
}


*/ 