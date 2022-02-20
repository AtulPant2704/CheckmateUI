const toastBtn = document.querySelector(".toast-btn");
const toast = document.querySelector(".toast");
const toastCancel = document.querySelector(".toast-cancel");
const toastUndo = document.querySelector(".toast-undo");

toastBtn.addEventListener("click",showToast);
toastCancel.addEventListener("click",hideToast);
toastUndo.addEventListener("click",hideToast);

function showToast(){
    console.log("show");
    toast.classList.add("show-toast");
    setTimeout(() => {toast.classList.remove("show-toast")}, 3000)
}

function hideToast(){
    console.log("hide");
    toast.classList.remove("show-toast");
}