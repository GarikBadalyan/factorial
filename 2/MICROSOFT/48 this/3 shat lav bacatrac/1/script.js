
const user = {
  name :"Aram",
  age:23,
  sayHello(){
    console.log(`im anunne ${this.name},es ${this.age} tarekan em`,this)
  }
}
//user.sayHello() //ay stex menq kanchum enq user obyekti miji sayHello metod@
// ev ete coment@ hanenq ktesnenq vor normal ashxatum e hima nergev@ nayel

 const f = user.sayHello// sa hamarjeq e const f = function(){
                         //   console.log(`im anunne ${this.name},es ${this.age} tarekan em`,this)               
                                                 //  }
 f()                        //aysinqn menq nor functia enq stexcum vor@ datark e ev kap cuni
                             // verevi functiayi het