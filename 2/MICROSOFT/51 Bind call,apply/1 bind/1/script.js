
const sam ={
  user:"Aram",
  age :43,
  sayHello(samName){
    console.log(`im anun@ ${this.user} `)
  }
}

setTimeout(sam.sayHello.bind(sam),2000)
 