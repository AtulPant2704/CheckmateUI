const menuBarBtn = document.querySelector(".menu-bar");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuBarClose = document.querySelector(".menu-bar-close");

menuBarBtn.addEventListener("click",openMenuBar);
menuBarClose.addEventListener("click",closeMenuBar);

function openMenuBar(){
   hamburgerMenu.classList.add("hamburger-menu-open");
}

function closeMenuBar(){
   hamburgerMenu.classList.remove("hamburger-menu-open");
}