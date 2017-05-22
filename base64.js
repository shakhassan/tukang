function processBase64(stringToBase64) {

  var toBase64 = new Buffer(stringToBase64).toString('base64')

  console.log("your base64 : " + toBase64);

  generatedBase64.innerHTML = "your generated toBase64 : " + toBase64;

}

function decodeBase64(base64ToString) {

  var buf = new Buffer(base64ToString, 'base64'); // Ta-da

  console.log("your decoded base64 : " + buf);

  generatedFromBase64.innerHTML = "your decoded base64 : " + buf;

}
