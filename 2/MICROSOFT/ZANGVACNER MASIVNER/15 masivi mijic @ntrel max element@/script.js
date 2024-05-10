let arr = [1,2,3,44,7777,5656,6543,345,56,3456,365,3456,36,45]



function max(masiv){
  if(masiv.length === 0){
    return 0
  }
  let maxel = masiv[0]
  for(let i = 0; i< masiv.length;i++){
  if(maxel < masiv[i]){
  maxel = masiv[i]
}
}
return maxel
}
document.write(max(arr))