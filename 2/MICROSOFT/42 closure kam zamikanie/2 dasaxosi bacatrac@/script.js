// ayn erevuyt@ vor functiai meji functian uni hasaneliutyun ira ayspes asac cnox functiayi miji popoxakannerin
// kochvum e << closer >>

let a = "hello";
function foo() {
  let a = "world";
  function bar() {
    return a;
  }
  return bar();
}
console.log( foo());


let x = 2
function closer(){
  let y = 5
  function str(){
    console.log(y)
    console.log(x)
  }
  return str()
}
closer()