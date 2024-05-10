let elem = document.querySelectorAll("section > div ");
for (let i = 0; i < elem.length; i++) {
  elem[i].addEventListener("click", myfunction);
}
function myfunction() {
  let red = parseInt(Math.random() * 255);
  let green = parseInt(Math.random() * 255);
  let blue = parseInt(Math.random() * 255);

  this.style.background = `rgb(${red},${green},${blue})`;
}
/*
let arr = ["aram", "armen", "karen", "hamo", "Saqo"];
function gorc(gum) {
  let y = document.getElementById("cucak");
  y.innerHTML = arr[Math.floor(Math.random() * arr.length)];
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  y.style.color = `rgb(${red},${green},${blue} `;
  y.style.fontSize = Math.floor(14 + Math.random() * 40) + "px";
}

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
*/