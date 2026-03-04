/**

- Portfolio - Navigation & Forms
- Handles mobile menu, form submission, and smooth scrolling
  */

// ==================== MOBILE MENU ====================

const navToggle = document.getElementById(‘navToggle’);
const navMenu = document.getElementById(‘navMenu’);

if (navToggle && navMenu) {
navToggle.addEventListener(‘click’, () => {
const isOpen = navMenu.classList.toggle(‘open’);
navToggle.setAttribute(‘aria-expanded’, String(isOpen));
});

// Close menu when a link is clicked
navMenu.querySelectorAll(‘a’).forEach(link => {
link.addEventListener(‘click’, () => {
navMenu.classList.remove(‘open’);
navToggle.setAttribute(‘aria-expanded’, ‘false’);
});
});
}

// ==================== YEAR DISPLAY ====================

const yearElement = document.getElementById(‘year’);
if (yearElement) {
yearElement.textContent = String(new Date().getFullYear());
}

// ==================== CONTACT FORM ====================

const contactForm = document.getElementById(‘contactForm’);
if (contactForm) {
contactForm.addEventListener(‘submit’, (e) => {
e.preventDefault();
alert(‘Thanks for reaching out! We'll get back to you soon. To enable email delivery, connect Formspree or Netlify Forms.’);
contactForm.reset();
});
}

// ==================== SMOOTH SCROLL NAVIGATION ====================

document.querySelectorAll(‘a[href^=”#”]’).forEach(anchor => {
anchor.addEventListener(‘click’, function (e) {
const href = this.getAttribute(‘href’);
if (href === ‘#’ || href === ‘#top’) return;

```
const target = document.querySelector(href);
if (target) {
  e.preventDefault();
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
```

});
});