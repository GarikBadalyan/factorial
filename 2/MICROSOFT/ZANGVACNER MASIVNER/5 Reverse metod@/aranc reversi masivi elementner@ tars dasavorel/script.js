let arr = [1, 2, 3, 4, 5, 6, 7, 8];
 
function reverse(a){
for(let i = 0; i<arr.length / 2;i++){
let tmp = arr[i];
arr[i] = arr[ arr.length - 1 - i];
arr[ arr.length - 1 - i]  = tmp
 }
 return arr
}
document.write(reverse(arr))