let menu = document.getElementById("menu");
let cord = 0;
function muve() {
  menu.style.marginLeft = cord + "px";
  cord = cord + 5;
}

let tr = setInterval(muve, 60);
document.getElementById("stop").onclick = function(){
  clearInterval(tr)
}
