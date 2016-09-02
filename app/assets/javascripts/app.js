$(document).on("turbolinks:load", (function(){

  codeText = document.getElementById('test-string').innerHTML.split('');

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

  $(document).on("keypress", function( event ) {
    console.log(event.keyCode);
    Game.start(event.keyCode);
  });

  $(document).one("keypress", function( event ){
    Timer.startTimer();
  });

  $(document).on('keydown', function(event) {
    if (event.keyCode == 9) {
      event.preventDefault();
      var e = $.Event('keypress');
      e.keyCode = 32;
      $(document).trigger(e);
      $(document).trigger(e);
    }
  });

}));
