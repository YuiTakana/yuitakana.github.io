// Landing Page Slideshow
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Show the first slide
if (slides.length > 0) {
  slides[0].classList.add('active');
  updateHeaderColor();
}

// Update header elements color based on slide brightness
function updateHeaderColor() {
  const activeSlide = document.querySelector('.slide.active');
  const landingHeader = document.querySelector('.landing-header');
  const landingLogo = document.querySelector('.landing-logo');
  
  if (!activeSlide || !landingHeader || !landingLogo) return;
  
  const brightness = activeSlide.getAttribute('data-brightness');
  
  // Remove both classes first from header
  landingHeader.classList.remove('light-bg', 'dark-bg');
  // Remove both classes first from logo
  landingLogo.classList.remove('light-bg', 'dark-bg');
  
  // Add appropriate classes
  if (brightness === 'light') {
    landingHeader.classList.add('light-bg');
    landingLogo.classList.add('light-bg');
  } else {
    landingHeader.classList.add('dark-bg');
    landingLogo.classList.add('dark-bg');
  }
}

// Rotate slideshow every 4 seconds
function showNextSlide() {
  if (slides.length === 0) return;
  
  // Remove active class from current slide
  slides[currentSlide].classList.remove('active');
  
  // Move to next slide
  currentSlide = (currentSlide + 1) % slides.length;
  
  // Add active class to new slide
  slides[currentSlide].classList.add('active');
  
  // Update colors based on new slide
  updateHeaderColor();
}

// Start the slideshow
setInterval(showNextSlide, 4000);

// Mobile menu handling (if needed for future)
const navItems = document.querySelectorAll('.landing-nav-item');
navItems.forEach(item => {
  item.addEventListener('click', function() {
    // Links will naturally navigate
  });
});
