// das 18-@ ushadir nayel
/*
class Samuari {
    constructor(name){
      this.name =name
    }
    hello(){
      console.log(this.name)
    }
  }
  let shogun = new Samuari("Armen")
  console.log(shogun.__proto__.__proto__ === Function.prototype.__proto__)
  //console.log(shogun.__proto__.constructor.__proto__ ===???)
  console.log(shogun.__proto__.__proto__.__proto__===Function.prototype.__proto__.__proto__)
  */
// stex ushadir nayel araji objecti mej functian sovorakan dzevi e haytararac u this@ ktpe obj-i miji marmin@ 
// amboxjutyamb functian el het@ isk this.name-@ ktpe "ars"
/*
let obj = {
  name:"ars",
  age:34,
  seyhel:function(){
    console.log(this, this.name)
    //return `${this.name} , ${this.age}` 

  }
}
obj.seyhel()
*/
// nuyn ban@ strelochni(arrow) functiayi depqum this-@ arden window objectn e tesnum aysinqn amenaverevi cnoxi  
//window- i thisn e tesnum  isk this.name-@ bnakanabar chi
// tesnum :bayc class-i jamanak classi miji functian te sovorakan grelov te arrow function-ov grelov this@ mievnuyn
// e classi miji thisn e @ndunum i tarberutyun objekti (objecti miji arrow functiayi this@ haskanum e window)
//classi mijin@ inchi chi haskanum qani vor ECMASCRIPT6 -um en stexcvel ham class@ ham el arrow-function@
// nerqevum 2 hat el hima irar tak klini classi 2 orinak
//  mekel call, apply, bind-@ arrow functioni vra chen azdum
/*
let obj = {
  name:"ars",
  age:34,
  seyhel:()=>{
    console.log(this.name,this)
    //return `${this.name} , ${this.age}` 

  }
}
obj.seyhel()
*/
/*
//ushadir nayel sa ev takin@ erkusn el nuyn bann en tpum qani vor arrow function@ classi mejic el durs chi 
// galis u dsi window-n chi tesnum aysinqn classi miji functiayi this@ erku depqum el nuynn e
class Anim {
  constructor(){
     this.name = "eee"
     this.age = 23
  }
  seyhel (){
  console.log(this,this.name)
  }
  }
  const anim = new Anim()
  anim.seyhel()
*/
/*
  class Anim {
    constructor(){
       this.name = "eee"
       this.age = 23
    }
    seyhel = () =>{
    console.log(this,this.name)
    }
    }
    const anim = new Anim()
    anim.seyhel()
    */
/*
var obj = {
  i: 10,
  b: () => console.log(this.i,this)
}
obj.b()
*/
// es shat karevor e haskanal hima estex my1()- i meji arrow function-i mej ete es this ogtagorcem  inq@ 
// jarangelu e my1()-i miji this@: isk my1()-i miji this === window bayc es pahin qani vor menq karox enq 
//my1()-in urish this poxancenq : isk function bar()-i this-@ ankax e chi jarangum verevinic
/*
function my1(){
  console.log(this)
  //this == window
  function bar() {
  console.log(this)
  //this === window
    //return this.a * this.b;
  }
  const anun = ()=>{
    console.log(this)
    //aysinqn stexac this@ jarangum e my1()-i miji thisin
    return 5
  }
  bar()
  anun()
}  
my1()
*/


//ay stex lriv parz erevum e this- i ashxatanq@ shat ushadir nayel buttoni vra click aneluc my1()-i miji this@ tpuma 
// body-n function bar()-i miji this@ tpuma window isk arrow functin-@ jaranguma my1()-i this-@
// vorpisi my1()-i miji function bar()-@ vercni my1()-i this-@ arden ogtagorcum enq bind call ev applyn metodner@
/*
function my1(){
  console.log(this)
  //this == window
  function bar() {
    console.log(this)
    return this.a * this.b;
  }
  const anun = ()=>{
    console.log(this)
    //return 5
  }
  bar()
  anun()
} 
  document.body.addEventListener("click",my1)
*/
/*
function my1(){
  console.log(this)
  
  function bar() {
    console.log(this)
    return this.a * this.b;
  }
  const anun = ()=>{
    console.log(this)
    //return 5
  }
  bar()
  anun()
} 

let myObject = {
  a:1,
  b:3,
  func:my1
}

myObject.func()
// ay stex ahavor karevor e haskanal@ nuyn verevini pes menq my1()-in poxancum enq objecti this@ 
//vor@ vercnum e my1()-@ mek el arrow functin-@ isk en sovorakan function-@ ( bar()-@ ) chi vercnum
// hima ete takinner@ coment anenq ktesnenq vor sa 3 ban ktpi 1-@ ev 3-@ obyekt@ isk 2-@ window-@
document.body.addEventListener("click",my1)
//stex menq vor click enq anum buttni vra body-i this-@ poxancume enq eli my1()-in u eli 1-@ u3-@
//kstanan bodi-i this@ isk 2-@ window
my1()
//isk ay stex ereqn el window ktpi
*/
/*
const my1 = () =>{
  console.log(this)
  //this == window
  function bar() {
    console.log(this)
    return this.a * this.b;
  }
  const anun = ()=>{
    console.log(this)
    //return 5
  }
  bar()
  anun()
} 

let myObject = {
  a:1,
  b:3,
  func:my1
}

myObject.func()
// stex arden arrow function-i depqum inq@ 3-n el window ktpi vorovhetev inq@ jarangum e cnoxi this@
document.body.addEventListener("click",my1)
//stex eli arrow function-i depqum inq@ 3-n el window ktpi
my1()
//stex eli arrow function-i depqum inq@ 3-n el window ktpi
*/

