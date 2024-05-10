const mytextelement = document.getElementById("mytext");
mytextelement.addEventListener("keyup", myfunction);

function myfunction(e) {
  e.currentTarget.value = e.currentTarget.value.replace(/[^.\d]/g, "");
}
