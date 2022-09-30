(function () {
  "use strict";

  const mainNav = document.getElementById("main-nav");

  function closeAll() {
    const dropdownList = document.querySelectorAll(".dropdown-list");
    dropdownList.forEach((dropdown) => {
      dropdown.classList.remove("show");
      dropdown.previousElementSibling.setAttribute("aria-expanded", "false");
    });
  }

  if (mainNav) {
    mainNav.addEventListener("click", (event) => {
      const isDropdownTrigger =
        event.target.classList.contains("dropdown-trigger");
      const isExpanded = event.target.getAttribute("aria-expanded") === "true";
      if (isDropdownTrigger) {
        // close any currently open dropdowns,
        // unless the clicked dropdown is already open
        if (!isExpanded) {
          closeAll();
        }

        const dropdownTrigger = event.target;
        const dropdown = document.getElementById(
          dropdownTrigger.getAttribute("aria-controls")
        );

        dropdownTrigger.setAttribute(
          "aria-expanded",
          isExpanded ? false : true
        );
        dropdown.classList.toggle("show");
      }
    });
  }
})();
