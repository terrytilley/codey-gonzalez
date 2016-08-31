function Timer(){

  var seconds;

  Timer.prototype.startTimer = function(){

    var start = new Date();

    globalTimer = setInterval(function() {
      seconds = ((new Date() - start) / parseFloat(1000)).toFixed(2);
      $('#timer').text(seconds + " Seconds");
    }, 10);

  };

  Timer.prototype.endTimer = function(){

    getSeconds = function(){
      console.log(seconds);
      return seconds;
    };

  };

}
