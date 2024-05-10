//value type
/*
let a = 5;
let b = a;// aysinqn b-n stacav 5 arjeq@ u inq@ aylevs a-i het kap chuni 
a=3
console.log(b,a)
function myf(c){
  console.log(c);
   c = 6
}
myf(a)
*/
//------------------------------------------
//referanse type
/*
let a ={model:"BMW"};
let b = 3
function mfc(c){
console.log(c.model);//hima es depqum parz e vor "BMW" ktpi hima nayenq nerqevi tarberak@
c=12
}

mfc(a)
*/

let a ={
  model:"BMW"
};
let b = a
function mfc(c){
console.log(c.model);
c.model = "Mercedes"
}
console.log(a.model)
mfc(a)
console.log(a.model)
console.log(b.model)










/*
let auto = document.getElementById("avto")
let move = 0
let cord = 0
window.addEventListener("keydown",function(event){
 
  if(event.key == "ArrowDown"){
    move+=10
    auto.style.marginTop =move + "px"
  }
 if(event.key =="ArrowRight"){
    
    cord+=10;
    auto.style.transform =`rotate(${cord}deg)`
  }
  
})
*/












/*let move = 0;
document.getElementById("area").addEventListener("click", function (event) {
  if (move % 2 === 0) {
    event.target.innerHTML = "x";
  } else {
    event.target.innerHTML = "0";
  }
  move++;
  avart();
});

let btnsub = document.querySelector("#sub");
let input = document.querySelector("input");
btnsub.addEventListener("click", function () {
  input.value = parseInt(input.value) + 1;
});
let num = document.querySelector("#num").innerHTML;
function avart() {
  let boxes = document.getElementsByClassName("box");
  let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML === "x" &&
      boxes[arr[i][1]].innerHTML === "x" &&
      boxes[arr[i][2]].innerHTML === "x"
    ) {
      alert("x-er@ haxtecin");

      location.reload();
    } else if (
      boxes[arr[i][0]].innerHTML === "0" &&
      boxes[arr[i][1]].innerHTML === "0" &&
      boxes[arr[i][2]].innerHTML === "0"
    ) {
      alert("0-er@ haxtecin");
      location.reload();
    }
  }
}
*/
