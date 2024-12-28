// // Countdown Timer Script
// document.addEventListener('DOMContentLoaded', () => {
//   const timerElement = document.querySelector('.offer-timer span');
//   let [minutes, seconds] = [14, 42]; // Example countdown time

//   const updateTimer = () => {
//       if (seconds === 0) {
//           if (minutes === 0) {
//               clearInterval(timer);
//               timerElement.textContent = 'Expired';
//               return;
//           }
//           minutes--;
//           seconds = 59;
//       } else {
//           seconds--;
//       }
//       timerElement.textContent = `⏱ ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   const timer = setInterval(updateTimer, 1000);
// });

// // Gateway process details script

// const price = document.getElementById('price').innerText;
// const mobile = localStorage.getItem('mobile').innerText;

// document.querySelectorAll('.recharge-btn').forEach(button => {
//   button.addEventListener('click', function() {
//     localStorage.setItem('mobile', mobile);   
//       localStorage.setItem('price', price);

//       // Navigate to the gateway page
//       window.location.href = 'gateway.html'; // Navigate to Page 2
//   });
// });

