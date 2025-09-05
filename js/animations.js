AOS.init({ duration: 1200, once: true });

// Fallback fade-in if AOS fails
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

