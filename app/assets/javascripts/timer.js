function Timer(){

  var seconds;
  var endTime;

  Timer.prototype.startTimer = function(){

    var start = new Date();

    globalTimer = setInterval(function() {
      seconds = ((new Date() - start) / parseFloat(1000)).toFixed(2);
      $('#timer').text(seconds + " Seconds");
    }, 10);

  };

  Timer.prototype.endTimer = function(){

    $('#timer').remove();
    $('#result-time').text("You finished in " + seconds + " seconds.");
    endTime = seconds;

  };

  Timer.prototype.getTime = function(){

    return endTime;

  };

}
