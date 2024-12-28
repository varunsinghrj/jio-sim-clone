// Placeholder JS for form handling or additional interactions


// Select necessary elements
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

// Function to update the carousel
function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;

  // Update indicators
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Event Listeners for Navigation Buttons
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Event Listeners for Indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});
// Optional: Add interactivity or effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      alert(`You clicked on ${card.querySelector('p').textContent}`);
    });
  });
// Optional JS for interaction (if required later)
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
      alert(`You clicked on: ${card.querySelector('h2').textContent}`);
    });
  });
// Placeholder for future interactivity, such as handling "Buy Now" clicks
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
      alert('Product added to cart!');
    });
  });
// Optional: Add interactivity for "Read More" buttons
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      alert('Redirecting to the full blog post...');
    });
  });
// script.js
function highlightItem(element) {
    // Remove "selected" class from all items
    const items = document.querySelectorAll('.guidance-item');
    items.forEach(item => item.classList.remove('selected'));

    // Add "selected" class to the clicked item
    element.classList.add('selected');
}
        // script.js

// Smooth scroll to top when a footer link is clicked
const footerLinks = document.querySelectorAll('.footer-section a');

footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});
