const menuOpenAndClose = document.querySelector(".fa-bars");
const menuItems = document.querySelector("aside");
const fullBackground = document.querySelector(".background-container");

menuOpenAndClose.addEventListener("click", openMenuItems);
fullBackground.addEventListener("click",closeMenuItems);

function openMenuItems() {
    menuItems.classList.toggle("nav-open");
    menuOpenAndClose.classList.toggle("fa-times");
    fullBackground.classList.toggle("open");
}

function closeMenuItems(){
    menuItems.classList.remove("nav-open");
    menuOpenAndClose.classList.remove("fa-times");
    fullBackground.classList.remove("open");
}
