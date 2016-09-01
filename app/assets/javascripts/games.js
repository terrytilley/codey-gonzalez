

var Game = (function () {

  var currentCharIndex = 0;
  var incorrectCount = 0;
  var timer;

  function markChar(type, codeText) {
    var currentChar = document.getElementById('code').children[currentCharIndex];
      currentChar.setAttribute('class', type);
    var nextChar = document.getElementById('code').children[currentCharIndex+1];
    if (type === 'correct') {
      currentChar.setAttribute('style', 'background-color: #00ff94');
      if (currentCharIndex+1 !== codeText.length) {
        nextChar.setAttribute('style', 'background-color: #0085ff');
      } // makes sure it doesnt try to style past last char
    }
    if (type === 'incorrect') {
      currentChar.setAttribute('style', 'background-color: #ff0000');
    }
  }

  function pressedKey(keycode) {
    if (keycode === 13) {
  		return '\n';
    } else {
      return String.fromCharCode(keycode);
    }
  }

  function compare(key, codeText, timer) {
    if(key === codeText[currentCharIndex]) {
      markChar('correct', codeText);
      ++currentCharIndex;
      if(currentCharIndex === codeText.length){
        endGame(codeText, timer);
      }
    } else {
      beep();
      markChar('incorrect', codeText);
      ++incorrectCount;
    }
  }

  function endGame(codeText, timer){
    document.getElementById('audio').play();
    timer.endTimer();
    Results.accuracy(codeText, incorrectCount);
    Results.wpm(codeText, timer);
    showCodey();
    Results.score();
    $.post("/games",
      { game:{
        accuracy: accuracyScore,
        score: totalScore,
        wpm: wordsPerMin,
        duration: timer.getTime(),
      }});
    playAgain();
  }

  function stopAudio(){
    document.getElementById('audio').pause();
    audio.src = audio.src;
  }

  function playAgain() {
    $('#play-again').removeClass('hidden');
  }

  function showCodey() {
    $('#codey').removeClass('hidden');
  }

return {
  start: function(keycode, codeText, timer) {
    compare(pressedKey(keycode), codeText, timer);
  }
};

})();
