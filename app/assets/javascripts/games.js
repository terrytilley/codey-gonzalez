var Game = (function () {

  var currentCharIndex = 0;
  var incorrectCount = 0;

  function markChar(type) {
    var nextChar = document.getElementById('code').children[currentCharIndex+1];
    if (type === 'correct' && currentCharIndex+1 !== codeText.length) {
      $(nextChar).addClass('active');
    }
    var currentChar = document.getElementById('code').children[currentCharIndex];
      $(currentChar).removeClass('incorrect').removeClass('active').addClass(type);
  }

  function pressedKey(keycode) {
    if (keycode === 13) {
  		return '\n';
    } else {
      return String.fromCharCode(keycode);
    }
  }

  function compare(key) {
    if(key === codeText[currentCharIndex]) {
      markChar('correct');
      ++currentCharIndex;
      if(currentCharIndex === codeText.length){
        endGame();
      }
    } else {
      beep();
      markChar('incorrect');
      ++incorrectCount;
    }
  }

  function endGame(){
    document.getElementById('audio').play();
    Timer.endTimer();
    Timer.printTimer();
    Results.accuracy(incorrectCount);
    Results.wpm();
    Results.score();
    showCodey();
    sendData();
    playAgain();
  }

  function sendData() {
    $.post("/games", {
      game: {
        accuracy: Results.getAccuracy(),
        wpm: Results.getWordsPerMin(),
        score: Results.getTotalScore(),
        duration: Timer.getTime(),
      }
    });
  }

  function playAgain() {
    $('#play-again').removeClass('hidden');
  }

  function showCodey() {
    $('#codey').removeClass('hidden');
  }

  return {
    start: function(keycode) {
      compare(pressedKey(keycode));
    }
  };

})();
