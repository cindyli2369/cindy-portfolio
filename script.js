let activeModal = null;
let lastFocusedElement = null;

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  lastFocusedElement = document.activeElement;

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  activeModal = modal;

  document.body.style.overflow = "hidden";

  const closeBtn = modal.querySelector(".close");
  if (closeBtn) closeBtn.focus();
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
  activeModal = null;

  if (lastFocusedElement) lastFocusedElement.focus();
}

// Tap/click outside modal-content closes
document.addEventListener("click", (e) => {
  const modal = e.target.closest(".modal");
  if (!modal) return;

  const content = e.target.closest(".modal-content");
  if (!content) closeModal(modal.id);
});

// ESC closes
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && activeModal) {
    closeModal(activeModal.id);
  }

  // Focus trap (Tab stays inside modal)
  if (e.key === "Tab" && activeModal) {
    const focusables = activeModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});