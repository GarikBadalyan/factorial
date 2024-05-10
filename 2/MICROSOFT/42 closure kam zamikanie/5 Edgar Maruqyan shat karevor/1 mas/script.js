/*
function f(){
    return function(){
        console.log("Inch vor")
    }
}
f()//sa vochinch chi tpelu qani vor functia e veradarcnum
let x = f()
console.log(x)// sa functia e tpelu
console.log(x.toString())// sa arden mijukn e cuyc talis
x()
*/
/*
function f(){
    let innerValue = 10
    //console.log(innerValue)
    return function(){
        innerValue++
        return innerValue
        
    }
}
const pat = f()

console.log(pat()) //aysinqn amen angam pat() functian kanchelis innerValue-i arjeq@ mekov avelanum e
console.log(pat())// aysinqn f() functiayi miji functian hasaneliutyun uni innerValue-in vor@ kochvum e closur-i
console.log(pat())// meji popoxakan
console.log(pat())
console.log(pat())
*/
/*
function f(){
    let arjeq = 0;
    return function(tiv){
        arjeq+=tiv
      return arjeq
    }
}
const ardyunq = f()
console.log(ardyunq(3))
console.log(ardyunq(5))
console.log(ardyunq(2))
console.log(ardyunq(10))
console.log(ardyunq(20))
*/
/*
function f(){
    let arjeq = 0;
    return function(tiv){
        if(typeof tiv !== "undefined"){
        arjeq+=tiv
      return null
        }
        return arjeq
    }
}
const ardyunq = f()
ardyunq(3)
ardyunq(5)
ardyunq(2)
ardyunq(10)
ardyunq(20)
console.log(ardyunq()) // aysinqn patasxanner@ pahec mej@ u tpec mer verji arfyunq@
*/
// STACK-I gaxapar@
function f() {
  let arr = [];
  return function (item) {
    if (typeof item !== "undefined") {
      return arr.push(item);
    } else {
        if(arr.length === 0){
            return undefined
        }
      return arr.pop();
    }
  };
}
const pat = f()
pat(5)
pat(10)
pat(10)
pat(20)
pat(15)
pat(100)
console.log(pat())//aysinqn erb datark kanchecinq inq@ gnac @nkav else-i mej ev arr-i mijic hanec 100 u tpec
// sa stack-i gaxaparn e erb arkxi mej hertov ararkaner enq dnum u vegji drac@ skzbic enq hanum hima ete erkrord 
// angam kanchenq apa ktpi 15 ev ayln
console.log(pat())//hima vorpisi saxi hamar chkanchenq functian kara shat erkar lini grenq cikl(loop)
//stex karanq cikl@ komentic hanenq u obshi porcenq ktesnenq vor sax tpum e mer verevi kanchac pat()- er@
console.log(pat())
console.log(pat())
console.log(pat())
console.log(pat())
console.log(pat())
console.log(pat())
/*
while(true){
    let nextitem = pat()
    if(typeof nextitem === "undefined"){
        console.log("verjacav")
        break
    }
    console.log(nextitem)
}
*/















