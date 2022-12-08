function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* MODALE D'INSCRIPTION */

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

// Fermeture de la mondale au clic X 
// Déclaration constante fermeture modale 
const modalClose = document.querySelectorAll(".close"); 
modalClose.forEach(Element=>Element.addEventListener("click", closeModal));
// Fonction déterminant la fermeture de la modale 
function closeModal() {
    modalbg.style.display = "none";
} 

// Fermeture de la modale via la touche Echap 
const keyCodes = {
    escape: "Escape"
};
window.addEventListener('keydown', (event) => {
    if (event.code === keyCodes.escape) {
        closeModal();
    }
});

// Fermeture de la modale via un clic outside 
modalbg.addEventListener('click',(event) => {
    if (event.target !== event.currentTarget) {
        return
    }
    closeModal();
});


/* MODALE DE CONFIRMATION */

// DOM Elements 
const confirmModal = document.getElementById("confirm-section");
const confirmBtn = document.getElementById("confirm-btn");

// Fonction d'affichage de la modale de confirmation
function confirmModalDisplay() {
    confirmModal.classList.add("visible")                     // Rajoute à la section la class visible, la gestion de l'affichage se fait via le CSS 
    document.querySelector("body").style.overflow = "hidden"; // Ajout d'un overflow hidden pour fixer la modale de confirmation sans scroll
}

// Bouton de fermeture de la modale de confirmation
confirmBtn.addEventListener('click', resetSignupModal);

// Fonction de réinitialisation du formulaire d'inscription
function resetSignupModal() {
confirmModal.classList.remove("visible")
  document.querySelector("form").reset();
  
  infoFirstName.previousElementSibling.style.border = "none";
  infoFirstName.textContent = "";
  
  infoLastName.previousElementSibling.style.border = "none";
  infoLastName.textContent = "";
  
  infoEmail.previousElementSibling.style.border = "none";
  infoEmail.textContent = "";
  
  infoBirthdate.previousElementSibling.style.border = "none";
  infoBirthdate.textContent = "";
  
  infoTrnQuanity.previousElementSibling.style.border = "none";
  infoTrnQuanity.textContent = "";
  
  arrayCityCheckbox = false;
  infoCityCheckbox.textContent = "";

  document.querySelector("body").style.overflow = "auto"; // Suppression de l'overflow hidden pour réafficher l'intégralité de la page 
}

// Fermeture de la mondale de confirmation au clic X 
// Déclaration constante fermeture modale 
const modalCloseConfirm = document.querySelector(".closeConfirm"); 
modalCloseConfirm.addEventListener("click", closeModalConfirm);
// Fonction déterminant la fermeture de la modale 
function closeModalConfirm() {
    resetSignupModal();
} 

