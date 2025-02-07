document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.close-btn');
  const navbar = document.querySelector('.vertical-navbar');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelectorAll('.nav-list a');

  // Toggle menu function
  function toggleMenu() {
      navbar.classList.toggle('active');
      overlay.classList.toggle('active');
      menuBtn.classList.toggle('hidden');
  }

  // Smooth scroll function with increased offset
  function smoothScroll(targetId) {
      const targetElement = document.getElementById(targetId);
      const headerOffset = 150; // Increased offset for better positioning
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  }

  // Event Listeners
  // Menu button click
  menuBtn.addEventListener('click', toggleMenu);

  // Close button click
  closeBtn.addEventListener('click', toggleMenu);

  // Overlay click
  overlay.addEventListener('click', toggleMenu);

  // Navigation links click
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          toggleMenu();
          // Add small delay to allow menu animation to complete
          setTimeout(() => smoothScroll(targetId), 300);
      });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navbar.classList.contains('active')) {
          toggleMenu();
      }
  });

  // Optional: Close menu on window resize if open
  window.addEventListener('resize', () => {
      if (navbar.classList.contains('active')) {
          toggleMenu();
      }
  });

  // Optional: Add active state to navigation items based on scroll position
  window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      // Get all sections
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop - 200; // Adjust offset to match scroll
          const sectionHeight = section.clientHeight;
          const sectionId = section.getAttribute('id');
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              // Remove active class from all links
              navLinks.forEach(link => link.classList.remove('active'));
              
              // Add active class to current section's link
              const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);
              if (correspondingLink) {
                  correspondingLink.classList.add('active');
              }
          }
      });
  });
});