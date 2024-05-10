let elem = document.querySelector("div");
let coordy = 0;
let idMove = setInterval(function () {
  coordy = coordy + 5;
  elem.style.top = coordy + "px";
}, 40);
setTimeout(()=>clearInterval(idMove), 5000);
