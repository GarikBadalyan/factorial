//estex menq gar objecti mej kanchel enq metod vor@ chka objekti mej inq@ gnum man e galis 
// proto-i kam prototype-i mej ete aydtex el chexav error ktpi kasi chka edpisi functia
/*
let gar = {
  name:"Garik"
}
console.log(gar.toString())//estex inq@ gtnum e
 //console.log(gar.poxos()) //estex error kberi 

 function Samuari(name){
  this.name = name;
 }
console.log(Samuari.poxos)//undefined kberi hima estex arden shat karevor e vor haskananq 
//prototype-i ev proto-i imast@ arden @stex menq poxos-in mtcnum enq Samuari-i miji 
//prototyperi metodneri mej
Samuari.prototype.poxos = function(){
  alert(this.name)
}
let sog = new Samuari("Dmitry")
sog.poxos()
let sog2 = new Samuari("Badalyan")
sog2.poxos()
 //hima es nuyn ban@ karox enq class-i tescov grenq 
 */
 class Samuari{//ev sra takic ashxatum e verevi grac@
   constructor(name){
     this.name = name
   }
   poxos(){
     console.log(this.name)
   }
 }
let bar = new Samuari("Janna")
bar.poxos()
let bar1 = new Samuari("Aleqsanyan")
bar1.poxos() 











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