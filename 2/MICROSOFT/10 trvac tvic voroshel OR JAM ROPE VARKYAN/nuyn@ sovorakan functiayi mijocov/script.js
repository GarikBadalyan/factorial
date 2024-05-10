function sum(x) {
  let day = Math.floor(x / 86400);
  x = x - day * 86400;
  let hours = Math.floor(x / 3600);
  x = x - hours * 3600;
  let minutes = Math.floor(x / 60);
  x = x - minutes * 60;
  return day + " days, " + hours + " Hrs, " + minutes + " Minutes, " + x + " second ";
}
document.write(sum(100000));

/*
var seconds = parseInt(123456, 10);

var days = Math.floor(seconds / (3600*24));
seconds  -= days*3600*24;
var hrs   = Math.floor(seconds / 3600);
seconds  -= hrs*3600;
var mnts = Math.floor(seconds / 60);
seconds  -= mnts*60;
document.write(days+" days, "+hrs+" Hrs, "+mnts+" Minutes, "+seconds+" Seconds");





function sum() {
  let x = document.getElementById("tiv").value;
  x = Number(x);
  
  let hours = Math.floor(x / 3600);
  let minutes = x % 60;
  
  let result = hours + ":" + minutes ;
  document.getElementById("out").innerHTML = result;
}

*/
