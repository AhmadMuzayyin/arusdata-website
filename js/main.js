document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Installation tabs
  const tabButtons = {
    npm: document.getElementById('tab-npm'),
    cdn: document.getElementById('tab-cdn'),
    download: document.getElementById('tab-download')
  };

  const tabContents = {
    npm: document.getElementById('content-npm'),
    cdn: document.getElementById('content-cdn'),
    download: document.getElementById('content-download')
  };

  function activateTab(tabName) {
    // Deactivate all tabs
    Object.keys(tabButtons).forEach(key => {
      if (tabButtons[key]) {
        tabButtons[key].classList.remove('border-primary-500', 'text-primary-600');
        tabButtons[key].classList.add('border-transparent', 'text-gray-500');
      }

      if (tabContents[key]) {
        tabContents[key].classList.add('hidden');
      }
    });

    // Activate selected tab
    if (tabButtons[tabName]) {
      tabButtons[tabName].classList.add('border-primary-500', 'text-primary-600');
      tabButtons[tabName].classList.remove('border-transparent', 'text-gray-500');
    }

    if (tabContents[tabName]) {
      tabContents[tabName].classList.remove('hidden');
    }
  }

  // Add click handlers for tabs
  Object.keys(tabButtons).forEach(key => {
    if (tabButtons[key]) {
      tabButtons[key].addEventListener('click', () => activateTab(key));
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });

  // Highlight current section in navigation
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

  function highlightNavigation() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-primary-600');
          link.classList.add('text-gray-600');

          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-primary-600');
            link.classList.remove('text-gray-600');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavigation);
});