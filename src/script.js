/**
 * Hlefi Village Digital Archive
 * Strictly Vanilla JavaScript
 */

// Scroll reveal implementation
const revealOnScroll = () => {
  const reveals = document.querySelectorAll('.reveal');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });
};

// Parallax header effect
const handleParallax = () => {
    const heroImage = document.querySelector('section img');
    if (!heroImage) return;

    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        heroImage.style.transform = `translateY(${scroll * 0.3}px) scale(1.1)`;
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  handleParallax();
  console.log('Hlefi Village Digital Archive Initialized (Vanilla JS)');
});
