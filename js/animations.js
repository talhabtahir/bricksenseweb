AOS.init({ duration: 1200, once: true });

// Fallback fade-in if AOS fails
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));
// Add this to js/animations.js
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const scrollPos = window.scrollY;

    if(scrollPos > 50){
        header.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
    } else {
        header.style.backgroundColor = "rgba(255, 255, 255, 1)";
        header.style.boxShadow = "none";
    }
});
