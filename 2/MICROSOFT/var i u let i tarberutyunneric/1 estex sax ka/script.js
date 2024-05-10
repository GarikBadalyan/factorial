

//var list ={};
//var list = [1,2,3,4] 
//console.log(list)//es depqum var -ov error chi talis ev ktpi array-@
//--------------------------------------

//let list ={};//let-i depqum arden error e talis
//let list = [1,2,3,4] 
//console.log(list)
//----------------------------------
//console.log(a)//es depqum undifenid e tpum bayc piti error tper hima ete var-i tex@ let grenq error kta undefined chi ta 
//var a = 2
/*
let a = 100
if(true){
  console.log("aram")//es depqum error kta isk nerqevum arden chi talis error vorovhetev arden erb menq a-in
  console.log(a)  // veragrum enq 99 arden inq@ nayum e arden global tiruytum a ka haytararvac
  let a =99
  
}
*/
/*
let a = 100
if(true){
  console.log("aram")//es shat ushadir nayel skzbic tpuma 100-@ heto nor 99 bayc ete grenq if-i nersum let a 
  console.log(a)      // arden error kta
   a =99
   console.log(a)
  
}
*/
let x = 222
if(true){
  console.log("hello")
  console.log(x)
  var x = 67      //estex erb grecinq var daje inq@ if-i mej chmtav u error tpec de vorovhetev vonc vor menq
  console.log(x)  // eli global let x = 222-i tak grenq var x = 67
}
//---------------------------------
//console.log(a)
//let a =4
//------------------------------------
/*
var a= 5;
let b = 4;
function mF(){
  var a = 7;
  let b = 8
  console.log(b)
}
console.log(b)
mF()
*/
//--------------------------------

/*
var a= 5;//ay sa shat karevor e estex erevum e vor var-@ vunkcional popoxakan e ev consolum tpum e var-i verji 
let b = 4; // arjeq@ hima nuyn ban@ ete anenq let -i depqum apa ktesnenq vor let-@ block popoxakan e ev 
function mF(){   // durs chi galis block-ic: mek el karevor e imanal vor functia bar@ chi toxnum vor var@ durs ga  
  var a = 7;  //functiaic durs: hima estex erku hat consolum 8 ktpi isk tuyn ban@ let-i depqum mi hat  
  let b = 8   // 8 ktpi mi hat 7 nayel nerqvi orinak@:
if(a == 7){
  var a  = 8
  console.log(a)
}
console.log(a)
}
mF()

*/
//-------------------------------------
/*
var a = 5;
let b = 4;
function myfunction(){
  var a = 7;
  let b = 8;
  if( b == 8){
    let b = 11
    console.log(b)
  }
  console.log(b)
}
myfunction()
//-------------------------------
*/
//for (var i = 0;i<7;i++){ // es depqum consolum 7 e tpum isk ete let grenq apa error kqci vorpisi error chqci
              // piti console.log-@ anenq for-i mej:
//}
//console.log(i)
//-------------------------------
//for (let i = 0;i<7;i++){ // stex 1-ic 6-@ ktpi bayc nerqevi gracum voc
 // console.log(i)
//}
//-----------------------------------
//for (let i = 0;i<7;i++){ // estex error kta

//}
//console.log(i)


  //for(let i=0;i<5;i++){ //hima es depqum 0-ic minchev 4-@ ktpi isk var-i depqum 5hat 5 ktpi 
//setTimeout(function(){
//console.log(i)
//},2000)
 // }
/*
var a = "hello"  // sa el e karevor aysinqn  functiayi miji iranic nerqevin@  chi tesnum consol@ ete verevi global 
function foo(){  //haytararac a-n chtesni apa undifind kta
  console.log(a)
  a = "Barev"
}
foo()
*/
/*
 for(var i = 0;i<5;i++){
   setTimeout(function(){ //stex 5hat 5 ktpi
     console.log(i)
   },2000)
 }




 let a = 3
 var b = 4
 function func(){
 
   let a = 5;
   var b = 11;
 if(b== 11){
   var b = 22;
   console.log(b)
 }
   console.log(b)
 }
 console.log(b)
 func()
 


 let a = 3
 var b = 4
 function func(){
 
   let a = 5;
   var b = 11;
 if(a== 5){
   let a = 22;
   console.log(a)
 }
   console.log(a)
 }
 console.log(a)
 func()
 
*/














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
