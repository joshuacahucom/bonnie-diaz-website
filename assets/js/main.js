// Bonnie Diaz — site behaviour (no dependencies)

// Where the Contact form posts. Leave empty until a form service is set up
// (e.g. a Formspree or Netlify Forms endpoint that emails Bonnie).
const FORM_ENDPOINT = "";

// Mobile menu
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
if (header && navToggle) {
  navToggle.addEventListener("click", () => {
    const open = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

// Photos: show the placeholder when the image file isn't there yet
document.querySelectorAll(".portrait img").forEach((img) => {
  const markMissing = () => img.classList.add("is-missing");
  if (img.complete && img.naturalWidth === 0) markMissing();
  img.addEventListener("error", markMissing);
});

// Videos: keep the placeholder up until the video file actually loads
document.querySelectorAll(".video__frame").forEach((frame) => {
  const video = frame.querySelector("video");
  if (!video) return;
  const markReady = () => frame.classList.add("is-ready");
  if (video.readyState >= 1) markReady();
  video.addEventListener("loadedmetadata", markReady);
});

// Home: opening video reel plays muted on loop; "Watch with sound" restarts it with audio
const heroVideo = document.querySelector("[data-hero-video]");
if (heroVideo) {
  const media = heroVideo.querySelector("video");
  const setSound = (on) => {
    heroVideo.classList.toggle("is-playing-sound", on);
    media.muted = !on;
    media.loop = !on;
    media.controls = on;
    if (on) media.currentTime = 0;
    media.play().catch(() => {});
  };
  heroVideo.querySelector("[data-hero-sound]")?.addEventListener("click", () => setSound(true));
  heroVideo.querySelector("[data-hero-close]")?.addEventListener("click", () => setSound(false));
  media.addEventListener("ended", () => setSound(false));
}

// About: arrow that reveals the extended bio
const bioToggle = document.querySelector("[data-bio-toggle]");
const bioMore = document.getElementById("full-bio");
if (bioToggle && bioMore) {
  const setOpen = (open) => {
    bioMore.hidden = !open;
    bioToggle.setAttribute("aria-expanded", String(open));
    bioToggle.querySelector(".label").textContent = open ? "Show less" : "Read full bio";
  };
  bioToggle.addEventListener("click", () => setOpen(bioMore.hidden));
  // Home's "Read more" links to about.html#full-bio — open it on arrival
  if (location.hash === "#full-bio") setOpen(true);
}

// Contact form
const form = document.querySelector("[data-contact-form]");
if (form) {
  const status = form.querySelector(".form__status");
  const show = (msg, kind) => {
    status.textContent = msg;
    status.className = `form__status is-${kind}`;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!FORM_ENDPOINT) {
      show("Thank you! (Preview only: this form isn't connected to an inbox yet.)", "success");
      form.reset();
      return;
    }
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(res.statusText);
      show("Thank you! Bonnie's team will be in touch soon.", "success");
      form.reset();
    } catch {
      show("Sorry, something went wrong. Please email Bonnie directly.", "error");
    }
  });
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
