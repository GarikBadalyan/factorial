
const sam ={
  user:"Aram",
  age :43,
  sayHello(samName){
    console.log(`im anun@ ${this.user} im tariq@ ${this.age} ${samName} e, ` ,this)
  }
}

const f = sam.sayHello
  f.apply(sam,["Badalovich"])    // nuyn call-i pes e ashxatum miayn te inq@ mez vorpes masiv e 
  // ashxatum ev piti nshenq qarakusi pakagceri mej                
                          