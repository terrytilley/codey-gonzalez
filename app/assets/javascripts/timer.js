var Timer = (function(){

  var seconds;
  var endTime;
  var globalTimer;

return {

  startTimer: function(){
    var start = new Date();
    globalTimer = setInterval(function() {
      seconds = ((new Date() - start) / parseFloat(1000)).toFixed(2);
      $('#timer').html('<i class="fa fa-clock-o" aria-hidden="true"></i>' + seconds);
    }, 10);
  },

  endTimer: function(){
    clearInterval(globalTimer);
    $('#timer').remove();
    endTime = seconds;
  },

  printTimer: function(){
    $('#result-time').text("You finished in " + seconds + " seconds.").fadeIn();
  },

  getTime: function(){
    return endTime;
  }
};

})();
