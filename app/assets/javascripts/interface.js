// TODO
function playAgain() {
  $('#play-again').removeClass('hidden');
}

// TODO
function showCodey() {
  $('#codey').removeClass('hidden');
}

// TODO
(function typing() {
  $(document).on("keypress", function( event ) {
    compare(pressedKey(event.keyCode), codeText);
  });
})();

// TODO
$(document).one("keypress", function( event ){
  timer = new Timer();
  timer.startTimer();
});
