
var Results = (function () {

  var accuracyScore;
  var wordsPerMin;
  var totalScore;

return {
  accuracy: function(incorrectCount){
    accuracyScore = (Math.round(100 - (incorrectCount / codeText.length) * 100));
    $('#accuracy').text("Accuracy: " + accuracyScore + "%");
  },

  wpm: function () {
    wordsPerMin = parseFloat((codeText.length / 5) / ( Timer.getTime() / 60.00)).toFixed(2);
    $('#wpm').text("Words per minute: " + wordsPerMin);
  },

  score: function () {
    totalScore = Math.round(((accuracyScore / 100.00 ) * wordsPerMin) * 20);
    $('#score').text("Score: " + totalScore);
  },

  getAccuracy: function() {
    return accuracyScore;
  },

  getWordsPerMin: function() {
    return wordsPerMin;
  },

  getTotalScore: function() {
    return totalScore;
  }

};

})();
