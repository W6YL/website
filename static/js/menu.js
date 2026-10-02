document.querySelectorAll(".site-menu").forEach((menu) => {
  const toggle = menu.querySelector(".menu-toggle");
  if (!toggle) return;

  menu.classList.add("is-enhanced");
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
  });

  menu.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    toggle.focus();
  });
});