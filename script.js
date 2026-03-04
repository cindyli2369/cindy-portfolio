/**

- Portfolio - Modal & Navigation
- Handles card clicks, modal display, and form submission
  */

// ==================== MODAL FUNCTIONALITY ====================

const modal = document.getElementById(‘contentModal’);
const modalClose = document.getElementById(‘modalClose’);
const modalBody = document.getElementById(‘modalBody’);
const cards = document.querySelectorAll(’.card’);

// Open modal when card is clicked
cards.forEach(card => {
card.addEventListener(‘click’, () => {
const sectionId = card.getAttribute(‘data-section’);
const contentElement = document.getElementById(sectionId + ‘-content’);

```
if (contentElement) {
  // Clone the content to avoid duplicating DOM elements
  const contentClone = contentElement.cloneNode(true);
  modalBody.innerHTML = '';
  modalBody.appendChild(contentClone);
  
  // Show modal
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}
```

});
});

// Close modal function
function closeModal() {
modal.classList.remove(‘show’);
document.body.style.overflow = ‘auto’;
}

// Close button click
modalClose.addEventListener(‘click’, closeModal);

// Close modal when clicking outside content
modal.addEventListener(‘click’, (e) => {
if (e.target === modal) {
closeModal();
}
});

// Close modal on Escape key
document.addEventListener(‘keydown’, (e) => {
if (e.key === ‘Escape’ && modal.classList.contains(‘show’)) {
closeModal();
}
});

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
