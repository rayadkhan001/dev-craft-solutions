// NAV BUTTON SCROLL + AUTO CLOSE MENU
function scrollToSection(id) {
  const section = document.getElementById(id);
  const offset = 80; // navbar height

  if (section) {
    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: "smooth",
    });

    // Close mobile menu with animation if open
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.classList.contains("opacity-100")) {
      mobileMenu.classList.remove("opacity-100", "max-h-[1000px]");
      mobileMenu.classList.add("opacity-0", "max-h-0");
    }
  }
}

// MOBILE MENU TOGGLE WITH FADE + SLIDE
const menuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  if (mobileMenu.classList.contains("opacity-0")) {
    // Show menu
    mobileMenu.classList.remove("opacity-0", "max-h-0");
    mobileMenu.classList.add("opacity-100", "max-h-[1000px]");
  } else {
    // Hide menu
    mobileMenu.classList.remove("opacity-100", "max-h-[1000px]");
    mobileMenu.classList.add("opacity-0", "max-h-0");
  }
});