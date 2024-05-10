window.addEventListener("load", function () {
  alert("ej@ bacvel e");
});
window.addEventListener("resize", function () {
  alert("patuhani razmer@ poxvel e"); //hima ete ekran@ poqracnenq apa mez alertov kasi vor ekran@ poxvel e
});
/*


  <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVCGV4h6DL8skp6FaXUvQZ0EyV8bp4xoHL3g&usqp=CAU"
  id="auto1"
 
  alt=""
/>

let auto = document.getElementById("auto1");
let w = document.body.clientWidth;
let h = document.body.clientHeight;
window.addEventListener("keydown", move);
window.addEventListener("resize", function () {
  w = document.body.clientWidth;
  h = document.body.clientHeight;
});
let degree = 0;
function move(e) {
  let x = auto.offsetLeft;
  let y = auto.offsetTop;
  if (e.key === "ArrowRight") {
    //auto.className = "auto";
    degree += 6;
    auto.style.transform = `rotate(${degree}deg)`;

    //if (x < w - 200) auto.style.left = x + 10 + "px";
  }
  if (e.key === "ArrowLeft") {
    degree -= 6;
    auto.style.transform = `rotate(${degree}deg)`;
  }
  if (e.key === "ArrowUp") {
    auto.className = "auto";
    if (y < h - 200) auto.style.top = y + 10 + "px";
  }
}
/*if (e.key === "ArrowDown") {
    auto.className = "auto";
    auto.classList.add("down");
    if (y < h - 200) auto.style.top = y + 10 + "px";
  }
  if (e.key === "ArrowLeft") {
    auto.className = "auto";
    auto.classList.add("left");
    if (x > 0) auto.style.left = x - 10 + "px";
  }
  if (e.key === "ArrowUp") {
    auto.className = "auto";
    auto.classList.add("up");
    if (y > 0) auto.style.top = y - 10 + "px";
  }
}
*/
