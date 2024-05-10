//1
/*
let dimychi = {
  name:"Dim"
}
console.log(dimychi.prototype)
console.log(dimychi.__proto__)
console.log(dimychi.__proto__ === Object.prototype)
//2
let arr = [1,2,-4,34]
console.log(arr.prototype)
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)

//3 
class Samurai{
  constructor(name){
    this.mame = name
  }
  hello(){
    alert(this.name)
  }
}
console.log(Samurai.prototype)
console.log(Samurai.__proto__)
console.log(Samurai.__proto__ === Function.prototype)
let sogon = new Samurai("Garik")
console.log(sogon)
console.log(sogon.prototype)// ay estex shat karevor e che chuni prototype qani vor sogon arden
//sovorakan object e inq@ miayn __proto__ uni
console.log(sogon.__proto__)
console.log(sogon.__proto__ === Samurai.prototype)// ay es el ushadir nayel ayo true -e qani vor 
//sogon-@ stexcvel e Samurai-ic
//4
*/
class Samurai{
  constructor(name){
    this.mame = name
  }
  hello(){
    alert(this.name)
  }
}
let bas = new Samurai("gar")
let bas2 = new Samurai("Nar")
console.log(bas.__proto__ === bas2.__proto__)// ayu true - e vorovhetev erkusn el nuyn Samuraic 
// en stexcvel
//5
const Component = (prop)=>{return "<h1> cka ognutyun</h1>"}
console.log(Component.prototype)
console.log(Component.__proto__)
console.log(Component.__proto__ === Component.prototype)// voch false qani vor Component@ 
//prototype chuni 
console.log(Component.__proto__ === Function.prototype)//ayo true






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