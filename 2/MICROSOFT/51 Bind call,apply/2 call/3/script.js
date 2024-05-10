
const sam ={
  user:"Aram",
  age :43,
  sayHello(){
    console.log(`im anun@ ${this.user} im tariq@ ${this.age} e, ` ,this)
  }
}
sam.sayHello()
const f = sam.sayHello
f()                     // sa hamarjeq e const f = function(){
  f.call(sam)                      //   console.log(`im anunne ${this.name},es ${this.age} tarekan em`,this)               
                          //  }
                       //aysinqn menq nor functia enq stexcum vor@ datark e ev kap cuni
                       // verevi functiayi het,,, aysinqn call() metodi imast@ ayn e 
// te call()-i pakagceri meji grvac@ cuyce talis te this-@ vorin e verabervum