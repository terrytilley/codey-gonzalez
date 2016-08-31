$(document).ready(function() {

  var text = 'function concatenate(first, last) {\n  var full;\n  full = first + last;\n  return full;\n}';
  var comparisontext = 'function concatenate(first, last) {^  var full;^  full = first + last;^  return full;^}'; //NEED TO FIND A WAY TO COMPARE ENTER KEY AND NEWLINE
  var codeText = text.split('');
  var splitText = comparisontext.split('');
  var currentCharIndex = 0;
  var incorrectCount = 0;

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
    var timer = new Timer();
    timer.startClock();
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

  $(document).one("keypress", function( event ){
    var timer = new Timer();
    timer.startClock();
  });

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
    console.log("endGame method called");
    accuracy();
    timer.endTimer();
  }

  function accuracy(){
    var accuracyScore = (Math.round(100 - (incorrectCount / codeText.length) * 100));
    document.getElementById('accuracy').innerHTML = "You scored: " + accuracyScore + "%";
  }
});
