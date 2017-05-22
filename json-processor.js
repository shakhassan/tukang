var jv = require("json-validation")

function processJson(stringJson) {

  var obj = JSON.parse(stringJson)
  console.log(obj);
  generatedJson.innerHTML += JSON.stringify(obj, null, 4);
}

// function validatorJson() {
//   var jv = new JSONValidation();
//   var object = {"name":"john", age:4}
//   var result = jv.validate(object, schema);
//   if (result.ok) {
//       // victory \o/
//   }
//   else {
//       console.log("JSON has the following errors: " + result.errors.join(", ") + " at path " + result.path);
//   }
// }
