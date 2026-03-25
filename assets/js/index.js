// Mobile menu toggle
const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// NAV BUTTON SCROLL
function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    const offset = 80; // navbar height
    const sectionTop = section.offsetTop - offset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    // Auto close mobile menu after click
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }
  }
}