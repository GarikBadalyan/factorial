let x = document.getElementById("a1");

x.addEventListener("keypress", myfunc);

function myfunc(event) {
  if (event.keyCode < 48 || event.keyCode > 57) {
    document.write("ne cifr");
    return false;
  }
}
/*let auto = document.getElementById("auto1");

window.addEventListener("keydown", myfunction);
let rotate = 0;
function myfunction(e) {
  if (e.key === "ArrowRight") {
    rotate += 10;
    auto.style.transformrotate = `${rotate}deg`;
  }
}

 let myDivTop = 0;
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
