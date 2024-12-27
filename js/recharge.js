// Countdown Timer Script (Optional Placeholder)
document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.querySelector('.offer-timer span');
    let [minutes, seconds] = [14, 42]; // Example countdown time
  
    const updateTimer = () => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          timerElement.textContent = 'Expired';
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      timerElement.textContent = `⏱ ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  
    const timer = setInterval(updateTimer, 1000);
  });