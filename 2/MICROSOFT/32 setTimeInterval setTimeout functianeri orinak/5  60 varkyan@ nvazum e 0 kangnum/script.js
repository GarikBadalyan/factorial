
let a = 60;
let timer;
function minuteCountdown() {
  document.getElementById("number").innerHTML = a;
  a--;
  if (a < 0) {
    clearTimeout(timer);
    alert(" timer disabled ");
  } else {
    timer = setTimeout(minuteCountdown, 1000);
  }
}
minuteCountdown();

/*
let x = 10
let timer = setInterval(func1,1000)
function func1(){
 
  document.getElementById("number").value = x;
x--;
if (x == 0 )
clearInterval(timer)
}

*/