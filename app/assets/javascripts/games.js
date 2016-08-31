$(document).ready(function() {

  var text = 'function concatenate(first, last) {\n  var full;\n  full = first + last;\n  return full;\n}';
  var comparisontext = 'function concatenate(first, last) {^  var full;^  full = first + last;^  return full;^}';

  // var text = 'function';
  // var comparisontext = 'function';

  var codeText = text.split('');
  var splitText = comparisontext.split('');
  var currentCharIndex = 0;
  var incorrectCount = 0;
  var timer;

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
    setInterval(function(){
      document.getElementById('audio').play();
    }, 10000);
  });

  function markChar(type) {
    var currentChar = document.getElementById('code').children[currentCharIndex];
      currentChar.setAttribute('class', type);
    if (type === 'correct') {
      currentChar.setAttribute('style', 'background-color: #00ff94');
    }
    if (type === 'incorrect') {
      currentChar.setAttribute('style', 'background-color: #ff0000');
    }
  }

  (function typing() {

    $(document).on("keypress", function( event ) {
      compare(pressedKey(event.keyCode), splitText);
    });
  })();

  function addCount(count) {
    count += 1;
    if (count === 1){
      console.log("one key pressed");
    }
  }


  function pressedKey(keycode) {
    if (keycode === 13) {
  			return '^';
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
      markChar('incorrect');
      ++incorrectCount;
      console.log(incorrectCount);
    }

  }

  function endGame(){
    stopAudio();
    accuracy();
    timer.endTimer();
    wpm();
    console.log(timer.endTimer());
  }

  function stopAudio(){
    document.getElementById('audio').pause();
    audio.src = audio.src;
  }

  function accuracy(){
    var accuracyScore = (Math.round(100 - (incorrectCount / codeText.length) * 100));
    $('#accuracy').text("Accuracy: " + accuracyScore + "%");
  }

  function wpm() {
    var wpm = parseFloat((codeText.length / 5) / ( timer.getTime() / 60.00)).toFixed(2);
    $('#wpm').text("Words per minute: " + wpm);
  }

});
