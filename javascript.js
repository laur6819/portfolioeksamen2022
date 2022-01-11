//BURGERMENU//
const knapper = document.querySelector("button");
const nav = document.querySelector("nav");

//her lytter den efter et klik for at "toggle" og vise menuen
knapper.addEventListener("click", toggleMenu);
//her starter den funktionen hvor den viser navigationen der er gemt i siden
function toggleMenu() {
  nav.classList.toggle("shown");
  //
  const menuShown = nav.classList.contains("shown");
  //hvis menuen er åben og man trykker på krydset
  if (menuShown) {
    knapper.classList.add("open");
  } else {
    knapper.classList.remove("open");
  }
}
