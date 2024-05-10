// bolor objectner@ unen proto qani vor js-um amen
//inch hamarvum e object uremn nshvacner@ bolor@ unen proto
let a = {
  model:33
}
console.log(a.__proto__)
let b = []
console.log(b.__proto__)
let c = 12
console.log(c.__proto__)
let x = "Garik"
console.log(x.__proto__)
function bar(){};//function declaretion
console.log(bar.__proto__)
let bar1 = function(){}//function defination kam expression
console.log(bar1.__proto__)
let bar2 = ()=>{} // strelochni functia
console.log(bar2.__proto__)
class foo {}//sa klas e vor@ nuynpes functia e 
console.log(foo.__proto__)
let y = true
console.log(y.__proto__)
// nuyn tipi objektneri proto-ner@ nuynn en ev hakarak@ tarber tipi objektneri 
//protoner@ tarber en orinakner@ nerqevum, shat karevor e haskanal vor ays erku datark
// objektner@ irar havasar chen bayc iranc proto-ner@ havasar en
let man = {}
let man1 = {}
console.log(man.__proto__ === man1.__proto__)
 let g ={
   model:"ara"
 }
 let f ={
   age:12
 }
 console.log(g.__proto === f.__proto__)// srank inchi irar havasar chen vorovhetev 
 // sranc tiper@ tarber en mek@ bolyan e myus@ string
 let g1 =[]
 let f1 =[]
 console.log(g1.__proto === f1.__proto__)
 let g2 =4
 let f2 =17
 console.log(g2.__proto === f2.__proto__) //ev ayln
 






















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