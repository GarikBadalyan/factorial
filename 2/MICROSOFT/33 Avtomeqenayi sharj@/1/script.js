let auto = document.getElementById("auto1");
auto.addEventListener("click", myfunction);
window.addEventListener("keydown", myfunction);
let mydivtop = 0;
function myfunction(e) {
  if (e.key === "ArrowDown") {
    mydivtop += 10;
    auto.style.top = `${mydivtop}px`;
  }
  if (e.key === "ArrowUp") {
    mydivtop -= 10;
    auto.style.top = `${mydivtop}px`;
  }
  if(e.key === "ArrowRight"){
    mydivtop +=10
    auto.style.right = `${mydivtop}px`;
  }
}

/* let myDivTop = 0;
    function myFunction(e) {s
      if(e.key === "ArrowDown"){ 
        myDivTop+=10
        myDiv.style.top = `${myDivTop}px`;
      }
      if(e.key === "ArrowUp"){ 
        myDivTop-=10
        myDiv.style.top = `${myDivTop}px`;
      }
    }*/
