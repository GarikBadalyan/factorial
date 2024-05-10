// constructiv functiayi anun@ grvum e mecatarov

function User (){
  // this = {}  new -i imast@ ayn e vor sarqum e ays datark object@ ev inch ka chka lcnum e mej@
  this.name = "Garik"  //  ev takic el ashxatacnum e return a anum User@ nerqevum vor grvac e
  this.age = 33
  this.getFilds = function(){
    console.log("name = " + this.name + " age = " + this.age)
  }
  // return User
}
let user = new User()
user.getFilds()
//aysinqn menq stexcecinq constructor functiayov object vor@ uni anun ev tariq(name, age) 
//ev uni functia(aveli chisht metod) vor@ console.log e anum anunn u tariq@