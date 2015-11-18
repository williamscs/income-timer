window.onload = function () {

  var seconds = 0;

  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var appendHours = document.getElementById("hours");
  var appendMoney = document.getElementById('money');
  var hourlyRate = document.getElementById('hourlyRate');

  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');

  var Interval;

  buttonStart.onclick = function() {
    Interval = setInterval(startTimer, 1000);
  };

  buttonStop.onclick = function() {
    clearInterval(Interval);
  };


  buttonReset.onclick = function() {
    clearInterval(Interval);
    timer.totalSeconds = 0;
    appendSeconds.innerHTML = timer.pad(timer.getSeconds());
    appendMinutes.innerHTML = timer.pad(timer.getMinutes());
    appendHours.innerHTML = timer.pad(timer.getHours());
  };

  function pad (number) {

  }

  function startTimer () {
    var rate = Number(hourlyRate.value);
    if (isNaN(rate)) {
      rate = 0;
    }

    timer.totalSeconds++;
    appendSeconds.innerHTML = timer.getSeconds();
    appendMinutes.innerHTML = timer.getMinutes();
    appendHours.innerHTML = timer.getHours();
    appendMoney.innerHTML = "$" + (timer.totalSeconds / 60 / 60 * rate).toFixed(2);
  }
  var timer = {
    totalSeconds: 0,
    pad: function(number) {
      if(number < 10){
        number = ("00" + number).slice(-2);
      }
      return number;
    },
    getHours: function() {
      var hours = Math.floor(this.totalSeconds/3600);
      return this.pad(hours);
    },
    getMinutes: function() {
      var minutes = Math.floor((this.totalSeconds % 3600) / 60);
      return this.pad(minutes);
    },
    getSeconds: function() {
      return this.pad(this.totalSeconds % 60);
    }
  };
};
