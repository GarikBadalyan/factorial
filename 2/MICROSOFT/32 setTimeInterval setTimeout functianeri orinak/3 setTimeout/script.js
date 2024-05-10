let menu = document.getElementById("menu");
let cord = 300;
function muve() {
  menu.style.marginLeft = cord + "px";
  cord = cord + 0;
}
//let stop= setInterval(muve,100)

setTimeout(muve, 3000);
