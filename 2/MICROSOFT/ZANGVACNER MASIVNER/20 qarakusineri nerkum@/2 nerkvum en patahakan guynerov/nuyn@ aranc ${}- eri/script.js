let elem = document.querySelectorAll("section > div ");
for (let i = 0; i < elem.length; i++) {
  elem[i].addEventListener("click", myfunction);
}
function myfunction() {
  let red = parseInt(Math.random() * 255);
  let green = parseInt(Math.random() * 255);
  let blue = parseInt(Math.random() * 255);
  this.style.background = "rgb(" + red + "," + green + "," + blue + ")";
}
