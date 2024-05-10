class Samurai {}
function Component() {}
const API = function(){}
console.log(Samurai.prototype)
console.log(Component.prototype)
console.log(API.prototype)

console.log(Object.prototype)//srank bolor@ unen prototype
console.log(Promise.prototype)
console.log(Function.prototype)
console.log(Boolean.prototype)
console.log(Number.prototype)
console.log(String.prototype)
console.log(Array.prototype)
console.log(Array.prototype === Object.prototype)

let a = {
 model:"mmm"
}
console.log(a.prototype)// stex undefined ktpi
console.log(a.__proto__)

function Ab(){  // isk estex arden prototype-@ ktpi
  this.model="dfv"
}
console.log(Ab.prototype)

// hima sa shat karevor e cankacac object-i proto-n hxvum e (havasar e) class-i kam functia-
//construktori prototype-i vra .vori ognutyamb ayd object@ stexcvel e

let man = {} // new Object(...)
console.log(man.__proto__ === Object.prototype)//qani vor man=@ Object e
let user = []// new Array(...)
console.log(user.__proto__ === Array.prototype)
let num = 23//new Number(...)
console.log(num.__proto__ === Number.prototype)
let str = "Garik"//new string(...)
console.log(str.__proto__ === String.prototype)
function myfunc (){}//new Function(...)
console.log(myfunc.__proto__ === Function.prototype)
class myclass{} //new Function(...)
console.log(myclass.__proto__ === Function.prototype)

















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