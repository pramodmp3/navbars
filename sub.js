document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const dropdowns = document.querySelectorAll(".has-dropdown > a"); // Check if the elements exist before adding listeners

  if (hamburger && navLinks) {
    // Toggle main menu
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("show");
    });
  } // Mobile dropdowns toggle

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      // Check for mobile width
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const subMenu = dropdown.nextElementSibling; // Close other open dropdowns in mobile view
        document.querySelectorAll(".dropdown-menu.show").forEach((openMenu) => {
          if (openMenu !== subMenu) {
            openMenu.classList.remove("show");
          }
        });
        subMenu.classList.toggle("show");
      }
    });
  });
});
