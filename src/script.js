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


// Mobile Menu Toggle
const handleMobileMenu = () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!menuToggle || !mobileMenu) return;

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.contains('translate-x-0');
    
    if (isOpen) {
      mobileMenu.classList.replace('translate-x-0', 'translate-x-full');
      menuIcon.setAttribute('data-lucide', 'menu');
      document.body.classList.remove('overflow-hidden');
    } else {
      mobileMenu.classList.replace('translate-x-full', 'translate-x-0');
      menuIcon.setAttribute('data-lucide', 'x');
      document.body.classList.add('overflow-hidden');
    }

  // Refresh lucide icons for the toggle
    if (window.lucide) {
      lucide.createIcons();
    }
  };

  menuToggle.addEventListener('click', toggleMenu);

  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.replace('translate-x-0', 'translate-x-full');
      menuIcon.setAttribute('data-lucide', 'menu');
      document.body.classList.remove('overflow-hidden');
      if (window.lucide) lucide.createIcons();
    });
  });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  handleParallax();
  handleMobileMenu();
  console.log('Hlefi Village Digital Archive Initialized (Vanilla JS)');
});
