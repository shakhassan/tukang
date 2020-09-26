function generatePassword(numOfPassword) {

    console.log("number of password : " + numOfPassword);

    for (i = 0; i < numOfPassword; i++) {

    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    // return retVal;
    console.log("your password : " + retVal);
    generatedPassword.innerHTML += "<br>your generated password : " + retVal;

    }
}