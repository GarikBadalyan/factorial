 let b1 = document.querySelector(".b-1")
 let b2 = document.querySelector(".b-2")

//b1.addEventListener("click", f)
function f(){
  console.log(this)
  this.style.background = "red"
}
f.call(b1)// aystex menq asum enq te (pakagceti mijin@) cuyc e talis te this -@ um e verabervum 













/*
const sam ={
  user:"Aram",
  age :43,
  sayHello(){
    console.log(`im anun@ ${this.user} im tariq@ ${this.age} e, ` ,this)
  }
}
sam.sayHello()
const f = sam.sayHello
f()
f.call(sam)
*/