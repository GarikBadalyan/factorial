//webDew this
console.log(this)
function abc(){
  console.log(this)
  console.log(3+5)
  //this.style.background = "red"
}
abc() //ete sra dem@ coment anenq apa karox enq ashxatacnel this.style.background@
// hima html-um sarkenq <p></p> u mej@ inch-vor text 
document.querySelector("p").addEventListener("click",abc)
//aysincn texti vra click -i depcum eli ashxati abc functian
//bayc ete ushadir nayenq apa el window chi tpum  

//ete unenq mi qani p apa piti forEach functiayi mijocov grenq
//let p = document.querySelectorAll("p")
//p.forEach(function(element){
 // element.addEventListener("click",abc)
//}) 
















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