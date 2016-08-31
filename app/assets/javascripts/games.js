$(document).ready(function() {

  var text = 'function concatenate(first, last) {\n  var full;\n  full = first + last;\n  return full;\n}';
  var comparisontext = 'function concatenate';
  var rest = '(first, last) {^  var full;^  full = first + last;^  return full;^}';
  var codeText = text.split('');
  var splitText = comparisontext.split('');
  var currentCharIndex = 0;
  var incorrectCount = 0;
  var timer;
  var accuracyScore;
  var wpmScore;

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
  });

  function markChar(type) {
    var currentChar = document.getElementById('code').children[currentCharIndex];
    var previousChar = document.getElementById('code').children[currentCharIndex - 1];
    $(currentChar).addClass(type);
    if ($(previousChar).hasClass('incorrect') ){
      $(previousChar).removeClass('incorrect');
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
    accuracy();
    wpm();
    timer.endTimer();
    $.post("/games",
      { game:{ accuracy: accuracyScore,
        score: timer.getTime(),
        wpm : wpmScore
      }});
  }

  function accuracy(){
    accuracyScore = (Math.round(100 - (incorrectCount / codeText.length) * 100));
    $('#accuracy').text("Accuracy: " + accuracyScore + "%");
  }

  function wpm() {
    wpmScore = parseFloat((codeText.length / 5) / ( timer.getTime() / 60.00)).toFixed(2);
    $('#wpm').text("Words per minute: " + wpmScore);
  }

});
