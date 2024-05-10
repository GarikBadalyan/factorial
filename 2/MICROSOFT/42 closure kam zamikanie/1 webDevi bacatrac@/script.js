/*
var a = 0
function func(){
a++
}
func()
func()
func()
func()
console.log(a)


function func(){
  var a = 0
  a=a+1
  
}
func()
func()
func()
func()
console.log(a)
*/
/*
function func(){
  var a = 0
  a=a+1
  console.log(a)  //stex 4 hat 1 e tpum karevor e nayel ushadir isk nerqevum 1,2,3,4 aysinqn stex amen angam 
}                 // functian kancheluc iq@ functiayi marmni mej tesnum e vor a = 0 ev uxaki gumarum e mek
func()           // isk nerqevi depqum functian amen angam kancheluc inq@ functiayi marmni mej tesnum e 
func()       // vor a -in gumarvel e 1 --2--3--4
func()
func()
*/
/*
let a = 0;
function func() {
  a++;
  console.log(a);
}
func();
func();
func();
a = "Hello"; //stex arden consolum Nan ktpi
func();
func();
*/
//asenq vor shat karevor e haskanal vor functiayi nersum haytararac popoxakan@ tesaneli e miayn functiayi
// nersum aysincn local e
// function func(){
// let a = 3
//  let b = 99
//  console.log(a)
//  }
//  func()
//  console.log(b)
//es depqum b-i arjeq@ chi tpi vorovhetev hasaneli chi b-n
//hima vorpisi menq unenanq 1,2,3,4 ardyunq@ bayc a popoxakan@ chhaytararenq global aysinqn haytararenq local bayc
// stananq nuyn 1,2,3,4... ardyunq@ menq verevum tesanq vor locali depqum stanum einq 4- hat 1.1.1.1. ardyunq@

function clojor() { //stex shat ushadir nayel menq kuneneanq 1,2,3,4, ev verjum eli 4
  let x = 0;
   function add () {
    x++;
    console.log(x)
  };
add()
add()
add()
add()
console.log(x)
}
 clojor(); 
  // aveli karj grenq

function clojor1(){
  let x1 = 0
    return function add(){
      x1++;
      console.log(x1)
    }
}
let f = clojor1()//aysinqn f -@ arden functia e u sa anpayman espes piti grenq vor ashxati 
                  // stex arden x1 popoxakan@ hasaneli e miayn add func-in aysinqn el global che
f()
f()
f()

