function generateEpoch(numOfEpoch) {

    for (i = 0; i < numOfEpoch; i++) {
      var milliseconds = (new Date).getTime();
      console.log("your epoch : " + milliseconds);
      generatedEpoch.innerHTML += "<br>your generated epoch : " + milliseconds;
    }

}
