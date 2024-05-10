
let Page = function(name){
  // this = {}
  this.name = name
  this.age = 12
  let tariq = 33 //menq ays popoxakan@ chenq karox consolum tpel bayc functiayi mej karox enq
  this.poxos = function(){  // ogtagorcel
    return "im anunn e " + this.name + " im tariqn e " + tariq
  }
  //return this
}
let vanya = new Page("Sako") 
console.log(vanya.poxos())
console.log(vanya.tariq) //sa undefined kveradarcni

/*
let Bar = function(){
  this.name = "Aram"
  this.age = 27
  return {name:"Valod"} //hima mez consolum ktpi mer name:"Valod" - object@: ete ay es eturni 
}                 // dem@ coment anenq apa ktesnenq vor tpum e arden verevi object@
let x = new Bar()
console.log(x)
console.log(x.name)
*/
