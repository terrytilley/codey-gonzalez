function Timer(){

  Timer.prototype.startClock = function(total_seconds){

    var start = new Date();
    var seconds;

    globalTimer = setInterval(function() {
      seconds = ((new Date() - start) / parseFloat(1000)).toFixed(2);
      $('#timer').text(seconds + " Seconds");
    }, 10);

    this.getSeconds = function(){
      return seconds;
    };


  };

}
