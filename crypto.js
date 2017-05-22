function cryptoEncrypt(stringToCrypto) {

  var crypto = require('crypto'),
      algorithm = 'aes-256-ctr',
      password = 'abcdefg';

    function encrypt(text){
        var cipher = crypto.createCipher(algorithm,password)
        var crypted = cipher.update(text,'utf8','hex')
        crypted += cipher.final('hex');
        return crypted;
    }

    var hw = encrypt(stringToCrypto)
    console.log(hw);
    generatedCrypto.innerHTML += "<br> your crypted text : " + hw;

}

function decryptCrypto(cryptoToString) {

  var crypto = require('crypto'),
      algorithm = 'aes-256-ctr',
      password = 'abcdefg';

    function decrypt(text){
        var decipher = crypto.createDecipher(algorithm,password)
        var dec = decipher.update(text,'hex','utf8')
        dec += decipher.final('utf8');
        return dec;
    }

    var decryptedString = decrypt(cryptoToString)
    console.log(decryptedString);
    generatedDecryptedCrypto.innerHTML += "<br> your crypted text : " + decryptedString;

}
