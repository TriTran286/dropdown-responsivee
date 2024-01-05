const hamburgerMenu = document.querySelector(".sidebar");
const hamburgerBtn = document.querySelector(".hamburger-menu");

function openMenu() {
   hamburgerMenu.classList.toggle("sidebar-active")
   hamburgerBtn.classList.toggle("active");
}

