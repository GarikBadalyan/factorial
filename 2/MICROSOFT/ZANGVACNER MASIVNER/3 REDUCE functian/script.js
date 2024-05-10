let arr = [1, 2, -3, -5, 3, 4,];
let x = arr.reduce(function (accumulator,currentValue) {
  return accumulator + currentValue
  
},0)
document.write(x)