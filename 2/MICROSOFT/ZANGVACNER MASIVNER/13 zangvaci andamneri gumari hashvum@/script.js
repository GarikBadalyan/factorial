let arr = [2, 4, 6, 8, 10, 20, 30];

function gum() {
  if(arr.length === 0){
    return 0
  }
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    x = x + arr[i];
  }
  document.write(x);
}
gum();

/*
let x = 0;
for( let i = 0; i < arr.length; i++){
x = x + arr[i]
}
document.write(x)*/
