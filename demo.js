let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');


function updateDisplay() {
  display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    startStopBtn.textContent = 'Start';
  } else {
    timer = setInterval(() => {
      seconds++;
      minutes += Math.floor(seconds / 60); // Increment minutes when seconds reach 60
      hours += Math.floor(minutes / 60); // Increment hours when minutes reach 60
      seconds %= 60; // Reset seconds to 0 when it reaches 60
      minutes %= 60; // Reset minutes to 0 when it reaches 60
      updateDisplay();
    }, 1000);
    startStopBtn.textContent = 'Stop';
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
  startStopBtn.textContent = 'Start';
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);

updateDisplay();
