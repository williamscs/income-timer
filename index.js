window.onload = function () {

  var seconds = 0;

  var appendSeconds = document.getElementById("seconds")
  var appendMinutes = document.getElementById("minutes")
  var appendHours = document.getElementById("hours")
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
    seconds = "00";
    appendSeconds.innerHTML = seconds;
  };



  function startTimer () {
    var rate = Number(hourlyRate.value);
    if (isNaN(rate)) {
      rate = 0;
    }

    seconds++;
    appendSeconds.innerHTML = "" + (parseInt(seconds / 10) % 6) + parseInt(seconds % 10);
    appendMoney.innerHTML = "$" + (seconds / 60 / 60 * rate).toFixed(2);
    //appendMoney.innerHTML = (((tens / 100 / 60 / 60) + (seconds / 60 / 60)) * hourlyRate).toFixed(2);
  }
};
