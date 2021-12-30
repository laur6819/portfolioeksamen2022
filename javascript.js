//BURGERMENU//
const knapper = document.querySelector("button");
const nav = document.querySelector("nav");

knapper.addEventListener("click", toggleMenu);

function toggleMenu() {
  nav.classList.toggle("shown");

  const menuShown = nav.classList.contains("shown");

  if (menuShown) {
    knapper.classList.add("open");
  } else {
    knapper.classList.remove("open");
  }
}
