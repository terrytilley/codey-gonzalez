
var Results = (function () {

  var accuracyScore;
  var wordsPerMin;
  var totalScore;

return {
  accuracy: function(codeText, incorrectCount){
    accuracyScore = (Math.round(100 - (incorrectCount / codeText.length) * 100));
    $('#accuracy').text("Accuracy: " + accuracyScore + "%");
    console.log(incorrectCount);
    console.log(accuracyScore);
  },

  wpm: function (codeText, timer) {
    wordsPerMin = parseFloat((codeText.length / 5) / ( timer.getTime() / 60.00)).toFixed(2);
    $('#wpm').text("Words per minute: " + wordsPerMin);
    console.log(wordsPerMin);
  },

  score: function () {
    var totalScore = Math.round(((accuracyScore / 100.00 ) * wordsPerMin) * 20);
    $('#score').text("Score: " + totalScore);
    console.log(totalScore);
  }

};

})();
