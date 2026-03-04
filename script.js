// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Elements
const backdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const modalOk = document.getElementById("modalOk");

let lastActiveEl = null;

// Open modal with content from card dataset
function openModalFromCard(cardEl){
  lastActiveEl = document.activeElement;

  const title = cardEl.dataset.title || "Details";
  const subtitle = cardEl.dataset.subtitle || "";
  const body = cardEl.dataset.body || "";

  modalTitle.textContent = title;
  modalSubtitle.textContent = subtitle;
  modalBody.textContent = body;

  backdrop.classList.add("is-open");
  backdrop.setAttribute("aria-hidden", "false");

  // lock scroll behind modal
  document.body.style.overflow = "hidden";

  // focus close button for accessibility
  modalClose.focus();
}

function closeModal(){
  backdrop.classList.remove("is-open");
  backdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastActiveEl && typeof lastActiveEl.focus === "function"){
    lastActiveEl.focus();
  }
}

// Click cards
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => openModalFromCard(card));
  // keyboard support for button is already built-in, but this helps on some browsers:
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " "){
      e.preventDefault();
      openModalFromCard(card);
    }
  });
});

// Close actions
modalClose.addEventListener("click", closeModal);
modalOk.addEventListener("click", closeModal);

// Click outside modal closes
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});

// ESC closes
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && backdrop.classList.contains("is-open")){
    closeModal();
  }
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});