const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

navToggle?.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
  });
});

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));
