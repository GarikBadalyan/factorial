


let arr1 = [2,4,-6,45,2,-4,6]
function adj(inputArr){
  let largestRezult =inputArr[0]*inputArr[1]
  for(let i = 0;i<inputArr.length-1;i++){
    if(inputArr[i]*inputArr[i+1] > largestRezult){
      largestRezult = inputArr[i]*inputArr[i+1]
    }
  } 
  return largestRezult
}
console.log( adj(arr1))