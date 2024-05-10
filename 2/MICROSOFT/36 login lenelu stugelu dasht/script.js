document.getElementById("submit").onclick = function (event) {
  let name = document.getElementById("name");
  let lastname = document.getElementById("lastname");
  let password = document.getElementById("password");
  let rePassword = document.getElementById("rePassword");
  let number = document.getElementById("number");
  event.preventDefault();
  if (name.value == "" || name.value.length < 3 || name.value.length > 10) {
    name.style.border = "2px solid red";
    return false;
  } else if (
    lastname.value == "" ||
    lastname.value.length < 3 ||
    lastname.value.length > 10
  ) {
    lastname.style.border = "2px solid red";
    return false;
  } else if (password.value == "" || password.value.length < 7) {
    password.style.border = "2px solid red";
    return false;
  } else if (rePassword.value !== password.value) {
    rePassword.style.border = "2px solid red";
    return false;
  } else if (
    number.value == "" ||
    number.value > 100 ||
    number.value == /^\d +$/
  ) {
    number.style.border = "2px solid red";
    return false;
  }
  return true;
};

/*let auto = document.getElementById("auto1");
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
    //auto.className = "auto";
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
*/
