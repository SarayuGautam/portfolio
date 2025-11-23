document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const mainNav = document.getElementById('main-nav');

  if (menuIcon && mainNav) {
    menuIcon.addEventListener('click', function () {
      mainNav.classList.toggle('open');

      if (mainNav.classList.contains('open')) {
        menuIcon.textContent = '✕';
        menuIcon.setAttribute('aria-expanded', 'true');
      } else {
        menuIcon.textContent = '☰';
        menuIcon.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const scrollProgress = document.getElementById('scroll-progress');

  if (scrollProgress) {
    window.addEventListener('scroll', function () {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

      scrollProgress.style.width = scrollPercentage + '%';
    });
  }

  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const formMessage = document.getElementById('form-message');

      const errorMessages = document.querySelectorAll('.error-message');
      errorMessages.forEach(error => {
        error.textContent = '';
      });

      formMessage.textContent = '';
      formMessage.className = '';

      let isValid = true;

      if (!name.value.trim()) {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
      }

      if (!email.value.trim()) {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        isValid = false;
      }

      if (!message.value.trim()) {
        document.getElementById('message-error').textContent = 'Message is required';
        isValid = false;
      }

      if (isValid) {
        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        formMessage.className = 'success-message';
        contactForm.reset();
      } else {
        formMessage.textContent = 'Please fill in all required fields correctly.';
        formMessage.className = 'error-message';
      }
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

