/*
function f1(m){
  return function f2(n){
return m + n
  }
}
const gum = f1(7)

console.log(gum(3))
*/
function f1(domain){
  return function (url){
    return ` https://${url}.${domain}`

  }
}
const com = f1("com")
const ru1 = f1("ru")
console.log(ru1("yandex"))
console.log(com("google"))