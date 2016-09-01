$(document).ready(function() {

  var codeText = document.getElementById('test-string').innerHTML.split('');
  var currentCharIndex = 0;
  var incorrectCount = 0;
  var timer;
  var accuracyScore;
  var wordsPerMin;
  var totalScore;

  (function createText() {
    for (var i = 0; i < codeText.length; i++) {
      var span = document.createElement('span');
      var char = document.createTextNode(codeText[i]);
      span.appendChild(char);
      span.setAttribute('class', 'initial');
      span.setAttribute('id', [i]);
      document.getElementById('code').appendChild(span);
    }

  })();

  $(document).one("keypress", function( event ){
    timer = new Timer();
    timer.startTimer();
    // setInterval(function(){
    //   document.getElementById('audio').play();
    // }, 10000);
  });

  function markChar(type) {
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

  (function typing() {
    $(document).on("keypress", function( event ) {
      compare(pressedKey(event.keyCode), codeText);
    });
  })();

  function pressedKey(keycode) {
    if (keycode === 13) {
  			return '\n';
    } else {
      return String.fromCharCode(keycode);
    }
  }

  function compare(key, codeText) {
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
    timer.endTimer();
    accuracy();
    wpm();
    showCodey();
    score();
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

  function accuracy(){
    accuracyScore = (Math.round(100 - (incorrectCount / codeText.length) * 100));
    $('#accuracy').text("Accuracy: " + accuracyScore + "%");
  }

  function wpm() {
    wordsPerMin = parseFloat((codeText.length / 5) / ( timer.getTime() / 60.00)).toFixed(2);
    $('#wpm').text("Words per minute: " + wordsPerMin);
  }


  function score() {
    totalScore = Math.round(((accuracyScore / 100.00 ) * wordsPerMin) * 20);
    $('#score').text("Score: " + totalScore);
  }

  function playAgain() {
    $('#play-again').removeClass('hidden');
  }

  function showCodey() {
    $('#codey').removeClass('hidden');
  }

});
