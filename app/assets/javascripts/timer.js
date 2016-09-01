var Timer = (function(){

  var seconds;
  var endTime;

return {

  startTimer: function(){
    var start = new Date();
    globalTimer = setInterval(function() {
      seconds = ((new Date() - start) / parseFloat(1000)).toFixed(2);
      $('#timer').text(seconds);
    }, 10);
  },

  endTimer: function(){
    $('#timer').remove();
    $('#result-time').text("You finished in " + seconds + " seconds.").fadeIn();
    endTime = seconds;
  },

  getTime: function(){
    return endTime;
  }
};

})();
