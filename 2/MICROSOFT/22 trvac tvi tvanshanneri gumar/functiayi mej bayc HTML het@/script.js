let verjinNish = 0;
let gumar = 0;
function gumH() {
  let x = document.getElementById("tiv").value;
  while (x != 0) {
    verjinNish = x % 10; //ays bajanman jamanak verjinMish popoxakan@ stanum e 5 arjeq@
    gumar = gumar + verjinNish;
    x = parseInt(x / 10); // sa vercnum e 1234,5 -ic 1234-@
  }
  document.write("<br />" + "<br />" + gumar);
}
gumH();
