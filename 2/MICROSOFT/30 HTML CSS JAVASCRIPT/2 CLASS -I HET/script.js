let myText = document.getElementById("myText");
let loginTexts = document.getElementsByClassName("loginText");

for (let i = 0; i < loginTexts.length; i++) {
  loginTexts[i].style.backgroundColor = "rgb(255,0,0)";
}

let errorText = document.getElementById("errorText");
if (errorText) {
  errorText.style.backgroundColor = "rgb(255,0,0)";
  errorText.innerHTML = "passwordi sxal";
}

function showMessage() {
  let successText = document.getElementById("successText");
  if (errorText && successText) {
    myText.value += "Changee value";
    successText.style.backgroundColor = "rgb(0,255,0";
    successText.innerHTML = "Congratulations";
    errorText.style.display = "none";
    successText.style.display = "block";
  }
}
