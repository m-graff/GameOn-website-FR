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



/* FERMETURE MODALE */

// Fermeture mondale au clic X 
// Déclaration constante fermeture modale 
const modalClose = document.querySelectorAll(".close"); 
modalClose.forEach(Element=>Element.addEventListener("click", closeModal));
// Fonction déterminant la fermeture de la modale 
function closeModal() {
    modalbg.style.display = "none";
} 

// Fermeture modale bouton Echap 
const keyCodes = {
    escape: "Escape"
};
window.addEventListener('keydown', (event) => {
    if (event.code === keyCodes.escape) {
        closeModal();
    }
});

// Fermeture modale via un clic outside 
modalbg.addEventListener('click',(event) => {
    if (event.target !== event.currentTarget) {
        return
    }
    closeModal();
});








