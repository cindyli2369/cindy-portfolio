// ===== helpers =====
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

document.addEventListener("DOMContentLoaded", () => {
  // year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const toggle = $(".nav-toggle");
  const navLinks = $("#navLinks");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // close menu when clicking a link (mobile)
    $$("#navLinks a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // modal content
  const modalData = {
    experience: {
      title: "Experience",
      subtitle: "Operations • Marketing • Client communication",
      body: `
        <p>Experience across operations, marketing, and client communication. Strong ability to manage workflows, coordinate teams, and build long-term client relationships.</p>
        <ul>
          <li>Cross-team coordination + execution under deadlines</li>
          <li>Client-facing communication and follow-through</li>
          <li>Process improvement + organized operations</li>
        </ul>
      `
    },
    education: {
      title: "Education",
      subtitle: "University of Washington",
      body: `
        <ul>
          <li>B.A. International Studies</li>
          <li>Business Administration Minor</li>
          <li>Strong writing, analysis, and stakeholder communication</li>
        </ul>
      `
    },
    skills: {
      title: "Skills",
      subtitle: "Communication • Execution • Bilingual",
      body: `
        <ul>
          <li>Sales communication + relationship building</li>
          <li>Marketing strategy + content/storytelling</li>
          <li>Workflow management + detail-oriented execution</li>
          <li>Bilingual: English / 中文</li>
        </ul>
      `
    },
    projects: {
      title: "Projects",
      subtitle: "Web • marketing • entrepreneurial initiatives",
      body: `
        <p>Portfolio website development, marketing projects, and entrepreneurial ventures.</p>
        <ul>
          <li>Portfolio build + deployment</li>
          <li>Low-budget campaign / community outreach work</li>
          <li>Structured planning + execution</li>
        </ul>
      `
    },
    volunteerCard: {
      title: "Volunteer",
      subtitle: "Community-first work",
      body: `
        <ul>
          <li>Team Read – Reading mentor for elementary students</li>
          <li>Legacy House – Translation support for seniors</li>
          <li>Environmental cleanup volunteer</li>
        </ul>
      `
    },
    photography: {
      title: "Photography",
      subtitle: "Everyday life • travel • urban moments",
      body: `
        <p>Freelance photography capturing everyday life, urban moments, and travel experiences.</p>
        <p class="muted">Tip: you can add a gallery section later.</p>
      `
    }
  };

  // modal logic
  const modal = $("#modal");
  const modalTitle = $("#modalTitle");
  const modalSubtitle = $("#modalSubtitle");
  const modalBody = $("#modalBody");

  function openModal(key) {
    if (!modal) return;
    const data = modalData[key];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle || "";
    modalBody.innerHTML = data.body || "";

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    // prevent background scroll
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // open from cards
  $$(".card[data-modal]").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.modal));
  });

  // close from backdrop / buttons
  if (modal) {
    modal.addEventListener("click", (e) => {
      const el = e.target;
      if (el && el.getAttribute("data-close") === "true") closeModal();
    });
  }

  // close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
});