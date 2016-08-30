$(document).ready(function() {

  var codeText = document.getElementById("test-string").innerText.split('');
  var currentCharIndex = 0;

  (function createText(character, type) {
    for (var i = 0; i < codeText.length; i++) {
      var span = document.createElement('span');
      var char = document.createTextNode(codeText[i]);
      span.appendChild(char);
      span.setAttribute('class', type);
      document.getElementById('code').appendChild(span);
    }
  })();

  function markChar(type) {
    var currentChar = document.getElementById('code').children[currentCharIndex];
      currentChar.setAttribute('class', type);
    if (type === 'highlight') {
      currentChar.setAttribute('style', 'background-color: #00ff94');
    }
  }

  (function typing() {
    $("#typing").on("keydown", function( event ) {
      compare(pressedKey(event.keyCode), codeText);
    });
  })();


function pressedKey(keycode) {
  return String.fromCharCode(keycode);
}

function compare(key, codeText) {
  if(key === codeText[currentCharIndex]) {
    markChar('highlight');
   ++currentCharIndex;
 } else {
    markChar('incorrect');
    return;
  }
}
});
