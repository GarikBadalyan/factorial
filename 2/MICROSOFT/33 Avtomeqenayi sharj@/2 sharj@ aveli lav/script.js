let auto = document.getElementById("auto1");
let w = document.body.clientWidth;
let h = document.body.clientHeight;
window.addEventListener("keydown", move);
window.addEventListener("resize", function () {
  w = document.body.clientWidth;
   h = document.body.clientHeight;
});

function move(e) {
  let x = auto.offsetLeft;
  let y = auto.offsetTop;
  if (e.key === "ArrowRight") {
    auto.className = "auto";
    auto.classList.add("right");
    
    if (x < w - 200) auto.style.left = x + 10 + "px";
  }
  if (e.key === "ArrowDown") {
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
