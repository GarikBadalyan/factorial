
let x = 123456;
let verjinNish = 0
let gumar = 0;
 while (x!=0){

verjinNish = x % 10;//ays bajanman jamanak verjinMish popoxakan@ stanum e 5 arjeq@
gumar = gumar + verjinNish;
x = parseInt(x/10)
 }
 document.write(gumar)