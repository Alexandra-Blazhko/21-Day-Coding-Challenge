function decodeMessage(message) {
   message = message
   .replace(/1/g, "i")
   .replace(/3/g, "e")
   .replace(/0/g, "o")
   .replace(/5/g, "y")
   .replace(/4/g, "a")
   .replace(/2/g, "u")

   return message;
}
//console.log(decodeMessage('th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l.'))