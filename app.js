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
   if (btnDropDown) {
      btnDropDown.classList.toggle('btn-open');
   } else {
      console.log("No element with the class 'btn-dropdown' found in the parent.");
   }
   
  });
});










