const hamburgerMenu = document.querySelector(".sidebar");
const hamburgerBtn = document.querySelector(".openMenu");

function openMenu() {
   if (hamburgerMenu.style.display === "none" || !hamburgerMenu.style.display) {
      hamburgerMenu.style.display = "flex";
   } else {
      hamburgerMenu.style.display = "none";
   }
}

const btnDropdown = document.querySelector(".btn-dropdown")

function buttonLSide() {
   btnDropdown.classList.toggle('btn-open')
}

function buttonRSide() {
   btnDropdown.classList.toggle('btn-open')
}

