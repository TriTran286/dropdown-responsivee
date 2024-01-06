const hamburgerMenu = document.querySelector(".sidebar");
const hamburgerBtn = document.querySelector(".hamburger-menu");

function openMenu() {
   hamburgerMenu.classList.toggle("sidebar-active")
   hamburgerBtn.classList.toggle("active");
}

const dropClicks = document.querySelectorAll(".dropClick");

dropClicks.forEach(function(dropClick) {
   dropClick.addEventListener('click', function() {
      const btnDropDown = this.parentElement.querySelector('.btn-dropdown');
      const arrow = this.parentElement.querySelector('.arrow');
   if (btnDropDown) {
      btnDropDown.classList.toggle('btn-open');
   } else {
      console.log("false");
   }
   if (arrow) {
      arrow.classList.toggle('arrow-up')
   } else {
      console.log("false");
   }
   });
   
});










