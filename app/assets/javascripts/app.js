$(document).ready(function() {

  var codeText = document.getElementById('test-string').innerHTML.split('');
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

  $(document).on("keypress", function( event ) {
      Game.start(event.keyCode, codeText, timer);
    });



  $(document).one("keypress", function( event ){
    timer = new Timer();
    timer.startTimer();
    // setInterval(function(){
    //   document.getElementById('audio').play();
    // }, 10000);
  });

});
