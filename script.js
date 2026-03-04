// ===== Footer Year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Modal Data (edit these texts anytime) =====
const modalContent = {
  experience: {
    title: "Experience",
    text:
      "Experience across operations, marketing, and client communication. Strong ability to manage workflows, coordinate teams, and build long-term client relationships.",
    img: "images/experience.jpg",
    primaryText: "Hire Me",
    primaryHref: "#contact",
  },
  education: {
    title: "Education",
    text:
      "University of Washington — International Studies (Europe & Southeast Asia) with a Business Administration minor.",
    img: "images/education.jpg",
    primaryText: "View Resume",
    primaryHref: "#",
  },
  skills: {
    title: "Skills",
    text:
      "Sales communication • Client relationship building • Marketing strategy • Workflow management • Cross-cultural communication • English/中文 bilingual.",
    img: "images/skills.jpg",
    primaryText: "Contact",
    primaryHref: "#contact",
  },
  projects: {
    title: "Projects",
    text:
      "Portfolio website development, marketing projects, and entrepreneurial ventures including a transportation service startup concept and community-focused work.",
    img: "images/project.jpg",
    primaryText: "See More",
    primaryHref: "#about",
  },
  volunteer: {
    title: "Volunteer",
    text:
      "Team Read mentor for elementary students • Translation assistance for seniors at Legacy House • Environmental clean-up volunteer.",
    img: "images/volunteer.jpg",
    primaryText: "Hire Me",
    primaryHref: "#contact",
  },
  photography: {
    title: "Photography",
    text:
      "Freelance photography capturing everyday life, urban moments, and travel experiences.",
    img: "images/photography.jpg",
    primaryText: "Contact",
    primaryHref: "#contact",
  },
};

// ===== Modal Elements =====
const modal = document.getElementById("glassModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalHeroImg = document.getElementById("modalHeroImg");
const modalPrimary = document.getElementById("modalPrimary");

let lastFocusedEl = null;

// Open modal with key
function openModal(key) {
  const data = modalContent[key];
  if (!data) return;

  lastFocusedEl = document.activeElement;

  modalTitle.textContent = data.title;
  modalText.textContent = data.text;
  modalHeroImg.style.backgroundImage = `url('${data.img}')`;

  modalPrimary.textContent = data.primaryText || "Hire Me";
  modalPrimary.setAttribute("href", data.primaryHref || "#contact");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");

  // Prevent background scroll
  document.body.style.overflow = "hidden";

  // Focus close button for accessibility
  const closeBtn = modal.querySelector(".modal-close");
  closeBtn.focus();
}

// Close modal
function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
    lastFocusedEl.focus();
  }
}

// Click card -> open modal
document.querySelectorAll(".card[data-modal]").forEach((card) => {
  card.addEventListener("click", () => openModal(card.dataset.modal));
});

// Close when clicking backdrop or any [data-close]
modal.addEventListener("click", (e) => {
  const shouldClose = e.target && e.target.getAttribute("data-close") === "true";
  if (shouldClose) closeModal();
});

// ESC to close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});