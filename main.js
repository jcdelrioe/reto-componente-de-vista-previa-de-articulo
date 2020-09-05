
window.onload = () => {
  document.querySelector(".share").addEventListener("click",openModal);
  document.querySelector(".share-open-component").addEventListener("click",closeModal);
};

/** Esta funcion se llama para abrir el modal */
function openModal(e) {
  document.querySelector(".contact").style.display = "none";
  document.querySelector(".share-container").style.display = "grid";
}

/** Esta funcion se llama para cerrar el modal */
function closeModal(e) {
  document.querySelector(".contact").style.display = "grid";
  document.querySelector(".share-container").style.display = "none";
}
