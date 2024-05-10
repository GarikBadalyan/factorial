window.onload = function () {
  for (let i = 0; i < 9; i++) {
    document.getElementById("game").innerHTML =
      document.getElementById("game").innerHTML +
      '<div class ="block"> </div> ';
  }
};
let hod = 0;
document.getElementById("game").addEventListener("click",function(event){
  console.log(event)
  if(event.target.className == "block"){
    if(hod%2==0){
    event.target.innerHTML = "x"
  }
  else{
    event.target.innerHTML = "0"
  }
  hod++
  checkWinner()
}
})
function checkWinner(){
  let allblock = document.getElementsByClassName("block");
  if(allblock[0].innerHTML == "x" && allblock[1].innerHTML== "x" && allblock[2].innerHTML== "x")alert("x-er@ haxtecin")
  if(allblock[3].innerHTML == "x" && allblock[4].innerHTML== "x" && allblock[5].innerHTML== "x")alert("x-er@ haxtecin")
  if(allblock[6].innerHTML == "x" && allblock[7].innerHTML== "x" && allblock[8].innerHTML== "x")alert("x-er@ haxtecin")
  if(allblock[0].innerHTML == "x"&& allblock[3].innerHTML == "x" && allblock[6].innerHTML== "x")alert("x-er@ haxtecin")
  if(allblock[1].innerHTML == "x"&& allblock[4].innerHTML == "x" && allblock[7].innerHTML== "x")alert("x-er@ haxtecin")
  if(allblock[2].innerHTML == "x"&& allblock[5].innerHTML == "x" && allblock[8].innerHTML== "x")alert("x-er@ haxtecin")
  if(allblock[0].innerHTML == "x"&& allblock[4].innerHTML == "x" && allblock[8].innerHTML== "x")alert("x-er@ haxtecin")
  if(allblock[2].innerHTML == "x"&& allblock[4].innerHTML == "x" && allblock[6].innerHTML== "x")alert("x-er@ haxtecin")
  if(allblock[0].innerHTML == "0" && allblock[1].innerHTML== "0" && allblock[2].innerHTML== "0")alert("0-er@ haxtecin")
  if(allblock[3].innerHTML == "0" && allblock[4].innerHTML== "0" && allblock[5].innerHTML== "0")alert("0-er@ haxtecin")
  if(allblock[6].innerHTML == "0" && allblock[7].innerHTML== "0" && allblock[8].innerHTML== "0")alert("0-er@ haxtecin")
  if(allblock[0].innerHTML == "0"&& allblock[3].innerHTML == "0" && allblock[6].innerHTML== "0")alert("0-er@ haxtecin")
  if(allblock[1].innerHTML == "0"&& allblock[4].innerHTML == "0" && allblock[7].innerHTML== "0")alert("0-er@ haxtecin")
  if(allblock[2].innerHTML == "0"&& allblock[5].innerHTML == "0" && allblock[8].innerHTML== "0")alert("0-er@ haxtecin")
  if(allblock[0].innerHTML == "0"&& allblock[4].innerHTML == "0" && allblock[8].innerHTML== "0")alert("0-er@ haxtecin")
  if(allblock[2].innerHTML == "0"&& allblock[4].innerHTML == "0" && allblock[6].innerHTML== "0")alert("0-er@ haxtecin")
}













































/*
function fac(x) {
  return x * fac(x - 1);
}
console.log(fac(5));



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
