function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}




/* ----------- MODIFICATIONS --------------- */ 





// Fermeture mondale au clic X 

// Déclaration constante fermeture modale 
const modalClose = document.querySelectorAll(".close"); 
// close modal
modalClose.forEach(Element=>Element.addEventListener("click", closeModal));
// Fonction déterminant la fermeture de la modale 
function closeModal() {
  modalbg.style.display = "none";
} 





/* Test - Fermeture bouton Echap et Entrée 
const keyCodes = {
  enter: 13,
  escape: 27
};
modalBtn.addEventListener('keydown', (event) => {
  if (event.which === keyCodes.escape) {
    modalClose(modalBtn, launchModal);
  }
});
*/ 