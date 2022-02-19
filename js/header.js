const menuOpenAndClose = document.querySelector(".fa-bars");
const menuItems = document.querySelector("aside");
const fullBackground = document.querySelector(".background-container");
const fullView = document.querySelector("body");

menuOpenAndClose.addEventListener("click", openMenuItems);
fullBackground.addEventListener("click",closeMenuItems);
fullView.addEventListener("click", closeMenuItems);

function openMenuItems() {
    menuItems.classList.toggle("nav-open");
    menuOpenAndClose.classList.toggle("fa-times");
    fullBackground.classList.toggle("open");
}

function closeMenuItems(event){
    if(event.target != menuItems && event.target != menuOpenAndClose){
        menuItems.classList.remove("nav-open");
        menuOpenAndClose.classList.remove("fa-times");
        fullBackground.classList.remove("open");
    }
}
