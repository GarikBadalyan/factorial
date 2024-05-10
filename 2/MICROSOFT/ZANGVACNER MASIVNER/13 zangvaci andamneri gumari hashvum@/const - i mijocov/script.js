const x = [2, 4, 6, 3];

function sumArray(x) {
  if (x.length === 0) {
    return 0;
  }
  return x[0] + sumArray(x.slice(1));
}
document.write(sumArray(x));

/*const zxc =  (x) => {
  console.log( x * x)
}
zxc(3)
console.log('----------------------') 



function zxc1 (x){
  console.log(x*x)
}
zxc1(4)
console.log('----------------------') 


const zxc2 = (x) => {
  return x * x;
}
console.log(zxc2 (5))



console.log('----------------------') 
const zxc3 = x => x * x
console.log(zxc3(6))*/
