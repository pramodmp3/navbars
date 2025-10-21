document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const dropdownToggles = document.querySelectorAll(".has-dropdown > a");

  // Function to handle the main hamburger menu toggle
  const toggleMenu = () => {
    if (hamburger && navLinks) {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("show");

      // Close all dropdowns when the main menu is closed
      if (!navLinks.classList.contains("show")) {
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          menu.classList.remove("show");
        });
      }
    }
  };

  // Attach listener for the main menu button
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  // Handle mobile dropdowns
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      // Check for mobile width (must match CSS media query breakpoint)
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const subMenu = toggle.nextElementSibling;

        // Close other open dropdowns in mobile view
        document.querySelectorAll(".dropdown-menu.show").forEach((openMenu) => {
          if (openMenu !== subMenu) {
            openMenu.classList.remove("show");
          }
        });

        // Toggle the clicked dropdown
        subMenu.classList.toggle("show");
      }
    });
  });

  // Optional: Close menu when a link is clicked on mobile (Improves UX)
  navLinks.querySelectorAll("a:not(.has-dropdown > a)").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
  });

  // Handle window resize (desktop restore)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      // Remove mobile classes when switching to desktop view
      navLinks.classList.remove("show");
      hamburger.classList.remove("active");
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.remove("show");
      });
    }
  });
});
