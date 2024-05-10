let carDiv = document.getElementById("car");
window.addEventListener("keydown", myFunction);
let myDivTop = 0;
function myFunction(event) {
  if (event.key === "ArrowDown") {
    myDivTop += 10;
    carDiv.style.top = `${myDivTop}px`;
    carDiv.style.transform = "rotate(90deg)";
    carDiv.style.transition = "1s";
    carDiv.style.transform = "rotate(270deg)";
    carDiv.style.transition = "1s";
  }
  if (event.key === "ArrowUp") {
    myDivTop -= 10;
    carDiv.style.top = `${myDivTop}px`;
    carDiv.style.transform = "rotate(90deg)";
    carDiv.style.transition = "1s";
  }
  if (event.key === "ArrowLeft") {
    myDivTop -= 10;
    carDiv.style.left = `${myDivTop}px`;
    carDiv.style.transform = "rotate(0deg)";
    carDiv.style.transition = "1s";
  }
  if (event.key === "ArrowRight") {
    myDivTop += 10;
    carDiv.style.left = `${myDivTop}px`;
    carDiv.style.transform = "rotate(180deg)";
    carDiv.style.transition = "1s";
  }
}
