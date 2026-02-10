/* =========================
   DARK / LIGHT MODE
========================= */

const toggleButton = document.getElementById("themeToggle");

// Detectar preferencia guardada
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggleButton.textContent = "☀️";
} else if (!localStorage.getItem("theme")) {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.body.classList.add("light-mode");
    toggleButton.textContent = "☀️";
  }
}

toggleButton.addEventListener("click", () => {

  // Animación fade out
  gsap.to("body", {
    opacity: 0,
    duration: 0.2,
    onComplete: () => {

      // Cambiar tema
      document.body.classList.toggle("light-mode");

      if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "🌙";
      }

      // Fade in
      gsap.to("body", {
        opacity: 1,
        duration: 0.2
      });

    }
  });

});





/* =========================
   GSAP ANIMATIONS
========================= */

// Registrar plugin
gsap.registerPlugin(ScrollTrigger);

// HERO animation
gsap.from(".hero-title", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-text", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from(".hero-btn", {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  delay: 0.6,
  ease: "back.out(1.7)"
});

// Cards reveal
gsap.utils.toArray(".reveal").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});


gsap.from(".navbar", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

ScrollTrigger.create({
  start: "top -80",
  onEnter: () => gsap.to(".navbar", { backgroundColor: "#000", duration: 0.3 }),
  onLeaveBack: () => gsap.to(".navbar", { backgroundColor: "transparent", duration: 0.3 })
});


//Texto letra por letra


const text = document.querySelector(".hero-title");
const letters = text.textContent.split("");

text.textContent = "";

letters.forEach(letter => {
  const span = document.createElement("span");
  span.textContent = letter;
  text.appendChild(span);
});

gsap.from(".hero-title span", {
  opacity: 0,
  y: 20,
  stagger: 0.02,
  duration: 0.5,
  ease: "power2.out"
});




/* =========================
   CONFETTI AL CARGAR
========================= */

window.addEventListener("load", () => {

  const duration = 1 * 1000; // 1 segundo
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });

    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

});


