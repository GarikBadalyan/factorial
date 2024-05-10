document.getElementById("submit").onclick = function (event) {
  let name = document.getElementById("name");
  let lastName = document.getElementById("lastname");
  let password = document.getElementById("password");
  let rePassword = document.getElementById("rePassword");
  let number = document.getElementById("number");
  event.preventDefault();
  if (name.value === "" || name.value.length < 3 || name.value.length > 10) {
    name.style.border = "2px solid red";
    return false;
  } else if (
    lastName.value === "" ||
    lastName.value.length < 3 ||
    lastName.value.length > 10
  ) {
    lastName.style.border = "2px solid red";
    return false;
  } else if (password.value === "" || password.value.length < 7) {
    password.style.border = "2px solid red";
    return false;
  } else if (rePassword.value !== password.value) {
    rePassword.style.border = "2px solid red";
    return false;
  } else if (!isNaN(number.value) && Number(number.value) > 100) {
    number.style.border = "2px solid red";
    return false;
  }
  name.style.border = "2px solid green";
  lastName.style.border = "2px solid green";
  password.style.border = "2px solid green";
  rePassword.style.border = "2px solid green";
  number.style.border = "2px solid green";
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
