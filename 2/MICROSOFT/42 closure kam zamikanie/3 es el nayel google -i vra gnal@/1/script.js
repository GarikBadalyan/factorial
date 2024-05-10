
let anun = "FFFF"// nerqevi erq@ nayel ushadir
let a = 5
function f1(){
  let anun = "aram"
function f2(){
  alert(anun + "12")
}
f2()
}
f1()


let a = 5
function f1(){
  let anun = "aram"
function f2(){
  alert(anun + "12")
}
return f2
}
let dd = f1()
dd()


let a = 5
function f1(){
  let anun = "aram"
return function (){
  alert(anun + "12")
}

}
let aa = f1()
aa()
// hima estex teseq vor ete functianer@ arandzin en grvac apa mi func-i miji popoxakan@ myusi mej hasaneliutyun 
// chuni error kta
function f1(){
  console.log(x)
}

function f2(){
  let x = 4
  f1()
}
f2()

function f1(frst){
  let name = "Armen"
  function f2(last){
    return name + frst + "aaasss"
  }
  return f2
}
let func = f1("Gar")
console.log(func)