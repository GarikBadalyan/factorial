console.log(this)

document.querySelector("button").addEventListener("click",function(){
  this.style.background = "cyan"
})

let p = document.querySelectorAll("p")
for (let i = 0 ;i<p.length;i++){
  p[i].addEventListener("click",f1)
}
function f1(){
  let red = parseInt(Math.random() * 255);
  let green = parseInt(Math.random() * 255);
  let blue = parseInt(Math.random() * 255);
  this.style.background = `rgb(${red},${green},${blue})`
  //this.style.background = "rgb(" + red + "," + green + "," + blue + ")"; nuyn@ verevini
  console.log(red)// sa 1-255 mijakayqum patahakan tiv ktpi consolum clicki depqum
}













/*
console.log(this)
function abc(){
  console.log(this)
 
}
abc()

document.querySelector("p").addEventListener("click",abc)
class Samuari {
  constructor(name){
    this.name =name
  }
  hello(){
    console.log(this.name)
  }
}
let shogun = new Samuari("Armen")
//console.log("-----------------")
//shogun.hello()
console.log(shogun.__proto__.__proto__ === Function.prototype.__proto__)
console.log(shogun.__proto__.constructor.__proto__)
console.log(shogun.__proto__.__proto__.__proto__)
*/

















/*
let user = {
  username:"Ape",
  password:"Garik"
}
let user2 = {}
//user2.__proto__ = user;
user2.photo = ':ivan.jpeg'
///console.log(user)
//console.log(user2)
//console.log(user2.username)
console.log(({}).prototype === ({}).__proto__)
*/