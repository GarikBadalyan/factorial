
const sam ={
  user:"Aram",
  age :43,
  sayHello(samName){
    console.log(`im anun@ ${this.user} im tariq@ ${this.age} ${samName} e, ` ,this)
  }
}

const f = sam.sayHello
  f.call(sam,"Badalovich")  //ete parametrer@ mi qani hat en kareli e tvarkel storaketov                  
                          