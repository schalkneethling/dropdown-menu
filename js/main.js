(function () {
  "use strict";

  const mainNav = document.getElementById("main-nav");

  if (mainNav) {
    mainNav.addEventListener("click", (event) => {
      const isDropdownTrigger =
        event.target.classList.contains("dropdown-trigger");
      if (isDropdownTrigger) {
        const dropdownTrigger = event.target;
        const dropdown = document.getElementById(
          dropdownTrigger.getAttribute("aria-controls")
        );
        dropdown.classList.toggle("show");
      }
    });
  }
})();
