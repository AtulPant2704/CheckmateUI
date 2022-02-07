const menuOpenAndClose = document.querySelector(".fa-bars");
const menuItems = document.querySelector("aside");
const mainSection = document.querySelector("main")

menuOpenAndClose.addEventListener("click", openMenuItems);

function openMenuItems(event) {
    menuItems.classList.toggle("nav-open");
    menuOpenAndClose.classList.toggle("fa-times");
}
