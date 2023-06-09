window.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const display = document.querySelector('.display');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
  
    // Stopwatch variables
    let timer = 0;
    let intervalId;
  
    // Format time as HH:MM:SS
    function formatTime(time) {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
  
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  
    // Start the stopwatch
    function startTimer() {
      intervalId = setInterval(() => {
        timer++;
        display.textContent = formatTime(timer);
      }, 1000);
    }
  
    // Stop the stopwatch
    function stopTimer() {
      clearInterval(intervalId);
    }
  
    // Reset the stopwatch
  function resetTimer() {
    stopTimer();
    timer = 0;
    display.textContent = formatTime(timer);
  }

  // Event listeners for button clicks
  startButton.addEventListener('click', startTimer);
  stopButton.addEventListener('click', stopTimer);
  resetButton.addEventListener('click', resetTimer);
});
  