/*
class Animal {
  constructor(){
    this.name ="aram",
    this.age = 33
  }
}
const animal = new Animal()

console.log(animal)
console.log(animal.name)
*/

class Animal {
  constructor(username,password) {
    this.username = username;
    this.password = password;
  }
  stugeluFunctia(){
  if(this.password.length>5){
    return true
  }
  return false
  }
}
let a = "Garik";
let b = 33;
const animal = new Animal(a, b);

console.log(animal);
console.log(animal.username);
console.log(animal.password);
console.log("-----------------------")
console.log(animal.stugeluFunctia())

/*
class Anim {
  constructor(pass,age) {
    this.pass = pass;
    this.user = age;
  }
  stanal() {
    console.log("im anun@ " + this.pass + " im tariq@ " + this.user);
  }
}
let anim = new Anim("Gar",32);
anim.stanal();

*/