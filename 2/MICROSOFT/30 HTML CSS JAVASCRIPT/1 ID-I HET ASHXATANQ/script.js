let myText = document.getElementById("errorText");
myText.style.backgroundColor = "rgb(255,0,0)";
myText.innerHTML = "passwordi sxal";

function showMessage() {
  let youText = document.getElementById("successText");
  youText.style.backgroundColor = "rgb(0,255,0";
  youText.innerHTML = "Congratulations";
  myText.style.display = "none";
  youText.style.display = "block";
}
