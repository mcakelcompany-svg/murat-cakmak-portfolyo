// ===== Yıl bilgisi (footer) =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Mobil menü aç/kapat =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

// Menü bağlantısına tıklayınca mobilde menüyü kapat
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== Navbar gölgesi (kaydırınca) =====
const navbar = document.getElementById("navbar");
const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ===== Bölümleri kaydırırken yumuşak göster (fade-in) =====
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => observer.observe(el));
} else {
  // Eski tarayıcılar için yedek
  reveals.forEach((el) => el.classList.add("visible"));
}
