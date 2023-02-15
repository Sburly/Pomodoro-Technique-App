let timerInterval;
let secondsRemaining = 60*25;
let timerIsRunning = false;

function startTimer() {
  if (!timerIsRunning) {
    timerIsRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
  }
};

function stopTimer() {
  clearInterval(timerInterval);
  timerIsRunning = false;
};

function updateTimer() {
  secondsRemaining--;
  if (secondsRemaining < 0) {
    stopTimer();
    return;
  }
  document.getElementById('minutes').innerHTML = padZero(Math.floor(secondsRemaining / 60));
  document.getElementById('seconds').innerHTML = padZero(secondsRemaining % 60);
};

function padZero(number) {
  return number < 10 ? '0' + number : number;
};

function resetTimer() { // Reset function
  stopTimer();
  secondsRemaining = 60;
  updateTimer();
};

document.getElementById('start').addEventListener('click', function() {
  if (timerIsRunning) {
    stopTimer();
    document.getElementById('start').innerHTML = 'START';
  } else {
    startTimer();
    document.getElementById('start').innerHTML = 'STOP';
  }
});