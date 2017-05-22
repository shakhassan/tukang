var uuid = require('uuid');

function generateUUID(numOfUuid) {

  console.log("number of uuid : " + numOfUuid);

  for (i = 0; i < numOfUuid; i++) {
    var myUuid = uuid.v4();
    console.log("your uuid : " + myUuid);
    generatedUuid.innerHTML += "<br>your generated uuid : " + myUuid;
  }



}
