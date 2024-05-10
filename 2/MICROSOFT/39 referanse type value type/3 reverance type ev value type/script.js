
//REVERANCE TYPE
let a = {
  model:"BMW"
}
let b = a
function myfunc(k) {
  console.log(k.model)
  k.model = "merc"
}
myfunc(a)// erb vor functian kanchum enq arden verj vonc-vor mer objekti anun@ menq poxum enq naev k-ov 
//ev poxeluc karox enq a.model - ov poxenq kam k.model-ov
console.log(a.model)
console.log(b.model)
 // VALUE TYPE
 let a1 = 5
 let b1 = 10
 let x1 = a1
 let y1 = b1
 document.write(a1,b1,x1,y1)
 x1 = 777;
 y1 = 888;
 document.write("<br />")
 document.write(a1,b1,x1,y1)