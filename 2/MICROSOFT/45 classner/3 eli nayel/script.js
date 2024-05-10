
class Animal {
  constructor(options){
    this.name=options.name,
    this.color = options.color
  }
}
const anim =new Animal({name:"jon",color:"red"})
console.log(anim)
console.log(anim.name)
console.log(anim.color)
//sa karox enq nayev espes grel

const Animal = function(opt){
  this.name = opt.nameth
  this.color = opt.color
}
const dog = new Animal({name:"Rex",color:"blue"})
console.log(dog)























/*
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