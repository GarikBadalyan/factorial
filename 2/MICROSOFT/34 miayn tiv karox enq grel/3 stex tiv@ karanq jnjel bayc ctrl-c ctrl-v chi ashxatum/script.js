const mytextelement = document.getElementById("mytext");
mytextelement.addEventListener("keydown", myfunction);

function myfunction(e) {
  let numberRegEx = /^\d+$/;
  if (!numberRegEx.test(e.key) && e.key !== "Backspace") {
    e.preventDefault();
  }
}
