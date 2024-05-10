const mydiv = document.getElementById("mydiv");
const myinnerdiv = document.getElementById("myinnerdiv");
mydiv.addEventListener("click",myfunction);
myinnerdiv.addEventListener("click",myinnerfunction);


function myfunction(){
  console.log("myDiv")
}
function myinnerfunction(){
  console.log("myinnerDiv")
}
//ete karmiri vre click enq anum consolum tesnum enq vor araj tpum e myinnerDiv@ heto nor myDiv@