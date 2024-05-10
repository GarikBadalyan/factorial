document.addEventListener("click", function () {
  //sa nshanakum e vor datark ejin (HTML) ete click anenq consolum kgrvi ("")
  console.log("documenti vra click e arvel");
});
//hima erkrord hramann enq grum eli nuyn clicki jamanak tox miajamanak
//
document.addEventListener("click", function () {
  const body = document.getElementsByTagName("body")[0] ;
  const textnode = document.createElement("p");
  textnode.innerHTML = "Nor stexcvav element";
  body.appendChild(textnode);
});
