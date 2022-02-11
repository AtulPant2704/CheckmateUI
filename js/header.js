const menuOpenAndClose = document.querySelector(".fa-bars");
const menuItems = document.querySelector("aside");
const fullBackground = document.querySelector(".background-container");

menuOpenAndClose.addEventListener("click", openMenuItems);
fullBackground.addEventListener("click",openMenuItems);

function openMenuItems(event) {
    menuItems.classList.toggle("nav-open");
    menuOpenAndClose.classList.toggle("fa-times");
    fullBackground.classList.toggle("open");
}
