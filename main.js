
window.onload = () => {
  document.querySelector(".share").addEventListener("click",openModal);
  document.querySelector(".share-open-component").addEventListener("click",closeModal);
};

/** Esta funcion se llama para abrir el modal */
function openModal(e) {

  const elem = document.querySelector(".share").getBoundingClientRect();
  console.log("elem: ", elem);
  
  
  if(window.innerWidth>=768){
    if(document.querySelector(".share-container2").style.display == "grid"){
      document.querySelector(".share-container2").style.display = "none";
      document.querySelector(".share").style.backgroundColor = "hsl(210, 46%, 95%)";
      document.querySelector(".img-share").src = "./images/icon-share.svg";
      // console.log(document.querySelector(".share-container2").style.left);
      // console.log(elem.left);
      
    }
    else{
      document.querySelector(".share-container2").style.display = "grid";
      const elem2 = document.querySelector(".share-container2").getBoundingClientRect();
      document.querySelector(".share-container2").style.left = (elem.left - elem2.width/2) + "px";
      document.querySelector(".share-container2").style.top = (elem.top - elem2.height) + "px";
      document.querySelector(".share").style.backgroundColor = "hsl(217, 19%, 35%)";
      document.querySelector(".img-share").src = "./images/icon-shareW.svg";
    }
  }else{
    document.querySelector(".contact").style.display = "none";
    document.querySelector(".share-container").style.display = "grid";
  }

}

/** Esta funcion se llama para cerrar el modal */
function closeModal(e) {
  document.querySelector(".contact").style.display = "grid";
  document.querySelector(".share-container").style.display = "none";
}
