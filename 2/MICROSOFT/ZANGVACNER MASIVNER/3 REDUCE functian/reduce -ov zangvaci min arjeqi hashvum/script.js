let arr = [1, -2, 12, 4, 5,  8];

let result = arr.reduce(function ( acumulatore,elem) {
if(elem<acumulatore){
  return elem
}
else{
  return acumulatore
}
});
document.write(result)