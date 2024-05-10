
let x = 0
function test1(){
  console.log(x)
}
function test2(){
  let x = 0;
  function print(){
    console.log(x)
  }
  print()
}
x= 5;
test1()
test2()

/*
let a = 0  //sa schotchik e sovorakan bayc a-n haytararvac e global u teseq nerqevum a-i arjeq@ poxvel e 7-ov 
function one(){   // u ayd ketic arden a-i arjeq@ mecanum e 7-in gumarvelov mek
  a = a + 1
  return a
}
console.log(one())
console.log(one())
a = 7
console.log(one())
console.log(one())
console.log(one())
*/
/*
let a = 2
function one(){
  let a = 0
  return function (){
   a = a + 1
   return a
  }              // stex arden parz erevum e vor verevi haytararac a popoxakan@ global e isk nersi a-n arden lokal
}                // e , isk nerqin functiayi hamar ayn hamarvum e global  
let gumar = one()  // stex shat karevor e haskanal vor en nersi let a = 0 sran miayn dostup uni nersi functian
console.log(gumar)
console.log(gumar())
console.log(gumar())
a=7
console.log(gumar())
console.log(gumar())
console.log(a) // stex arden piti tpi 7 arjeq@ 
 
let x = one()
console.log(x())
console.log(x())
console.log(x())
*/