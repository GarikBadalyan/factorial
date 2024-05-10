/*
function f1(x){
 return function(){
   console.log(100*x)
 }
}                     // estex menq karox einq uxaki f1()- functian kanchel bayc ardyunq cher lini inchi? vorovhetev
const func = f1(20)  //menq ed depqum meji functian chenq kanchi

console.log(func) // ay es tox@ mez functia e veradarcnelu
console.log("------------------------------")
func()

*/
function gumar(a){  // sa  el e karevor ushadir nayel shat shat karevor e aysinqn menq parpakum enq gumari arjeq@
  return function(b){  //tarber arjeqner
return a + b
  }                                
}
let miasin = gumar(2)
let miasin = gumar(45)

let miasin1 = gumar(22)
let miasin1 = gumar(55)

console.log(miasin(10))
console.log(miasin1(10))
                       //sa u verevin@ nuyn bann en
                      
                      /*
function gumar(a){  
  return function(b){
console.log( a + b)
  }
}
let miasin = gumar(2)

miasin(10)
*/