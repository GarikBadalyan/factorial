//1
/*
console.log(({}).prototype === ({}).__proto__)//false undefinet !== proto - in
//2
function fTab(){}
console.log(fTab.prototype === fTab.__proto__)//falshe qani vor fTab.proto = Function.prototype
console.log(fTab.__proto__ === Function.prototype)
//3
function f1(){}
function f2(){}
console.log(f1.__proto__ === f2.__proto__)
console.log(f1.prototype === f2.prototype)
//4
let Component = (props)=>{
  return "Allo"
}
console.log(Component.prototype === Object.prototype)
//5
let age = 22
console.log(age.prototype === Number.prototype)
console.log(age.__proto__ === Number.prototype)
//6
class Haker {}
console.log(Haker.__proto__ === Function.prototype)
// 7{
function f5(){}
console.log(f5.__proto__ === Function.prototype)
//8
const num = 34
console.log(num.__proto__ === Number.prototype)
//9
*/
class Samuari {
  constructor(name){
    this.name =name
  }
  hello(){
    console.log(this.name)
  }
}
let shogun = new Samuari("Armen")
console.log("-----------------")
console.log(shogun.__proto__.__proto__ === Function.prototype.__proto__)
console.log(shogun.__proto__.constructor.__proto__)
//console.log(shogun.__proto__.__proto__.__proto__)


















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