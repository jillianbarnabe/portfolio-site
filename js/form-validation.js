document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
  
      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
        return;
      }
  
      if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = 'red';
        return;
      }
  
      formMessage.textContent = 'Message sent! (Not really — this is just a demo.)';
      formMessage.style.color = 'green';
      form.reset();
    });
  
    function validateEmail(email) {
      // Simple regex for email format
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  });
  