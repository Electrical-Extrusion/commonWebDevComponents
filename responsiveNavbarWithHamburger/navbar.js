const navbar = document.querySelector("#navbar");
const navToggle = document.querySelector("#nav-toggle");

navToggle.addEventListener("click", onNavToggleClick);

function onNavToggleClick() {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
  } else {
    navbar.classList.remove("open");
  }
}
