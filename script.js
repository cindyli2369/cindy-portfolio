// ===== Year in footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Mobile nav toggle =====
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  // close menu when you click a link (mobile)
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && navLinks.classList.contains("is-open")) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ===== Modal content =====
const modalData = {
  experience: {
    title: "Experience",
    subtitle: "Operations • Marketing • Client Communication",
    body: `
      <p>Experience across operations, marketing, and client communication with a focus on execution and clarity.</p>
      <ul>
        <li>Organize workflows and timelines in fast-paced environments</li>
        <li>Coordinate stakeholders and keep communication clean</li>
        <li>Drive outcomes with a detail-oriented approach</li>
      </ul>
    `
  },
  education: {
    title: "Education",
    subtitle: "University of Washington",
    body: `
      <p><strong>BA, International Studies</strong> (Europe & Southeast Asia focus)</p>
      <p><strong>Minor:</strong> Business Administration</p>
      <ul>
        <li>Research, writing, and cross-cultural analysis</li>
        <li>Leadership & project coordination experience</li>
      </ul>
    `
  },
  skills: {
    title: "Skills",
    subtitle: "The tools I use to get results",
    body: `
      <ul>
        <li>Sales communication & relationship building</li>
        <li>Marketing strategy & content planning</li>
        <li>Workflow & project coordination</li>
        <li>Bilingual: English / 中文</li>
      </ul>
    `
  },
  projects: {
    title: "Projects",
    subtitle: "Hands-on work that shows range",
    body: `
      <p>Portfolio website development, marketing projects, and entrepreneurial ventures.</p>
      <ul>
        <li>Web portfolio build (HTML/CSS/JS)</li>
        <li>Low-budget marketing experiments & community outreach</li>
        <li>Startup operations & coordination</li>
      </ul>
    `
  },
  volunteerModal: {
    title: "Volunteer",
    subtitle: "Community-first work",
    body: `
      <ul>
        <li><strong>Team Read</strong> — Reading mentor for 2nd & 3rd graders</li>
        <li><strong>Legacy House</strong> — Mail translation support for seniors</li>
        <li><strong>Environmental cleanup</strong> — Ongoing volunteer work</li>
      </ul>
    `
  },
  photography: {
    title: "Photography",
    subtitle: "Everyday life • Urban moments • Travel",
    body: `
      <p>Freelance photography capturing real moments with a clean, natural style.</p>
      <ul>
        <li>Street / lifestyle</li>
        <li>Travel storytelling</li>
        <li>Local scenes & details</li>
      </ul>
    `
  }
};

// ===== Modal logic =====
const glassModal = document.getElementById("glassModal");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalBody = document.getElementById("modalBody");

let lastFocusEl = null;

function openGlassModal(key) {
  const data = modalData[key];
  if (!data) return;

  lastFocusEl = document.activeElement;

  modalTitle.textContent = data.title;
  modalSubtitle.textContent = data.subtitle || "";
  modalBody.innerHTML = data.body || "";

  glassModal.classList.add("is-open");
  glassModal.setAttribute("aria-hidden", "false");

  // lock background scroll
  document.body.style.overflow = "hidden";

  // focus close button for accessibility
  const closeBtn = glassModal.querySelector("[data-close]");
  closeBtn && closeBtn.focus();
}

function closeGlassModal() {
  glassModal.classList.remove("is-open");
  glassModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  // restore focus
  if (lastFocusEl && typeof lastFocusEl.focus === "function") {
    lastFocusEl.focus();
  }
}

// Click on any card
document.querySelectorAll(".card[data-modal]").forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-modal");
    openGlassModal(key);
  });
});

// Close handlers (backdrop, X button, close button)
glassModal.addEventListener("click", (e) => {
  if (e.target.matches("[data-close]")) closeGlassModal();
});

// ESC to close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && glassModal.classList.contains("is-open")) {
    closeGlassModal();
  }
});