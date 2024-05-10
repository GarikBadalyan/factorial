let a = {
  model:33
}
let b = {
  age : a
}
let c = a
console.log(a)  // sranq sax hertov nayel arandzin u haskanal shat karevor e aysinqn objekt@
console.log(a===b.age) // arrayi pes hxumayin tip -i e 
console.log(a === c)
console.log(b.age)
console.log(b)
b.age.model = 21
console.log(a.model)
console.log(c.model)
console.log({}==={}) // erku datark objektner irar havasar chen vorovhetev tarber hxumner en 
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