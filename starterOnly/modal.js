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



/* FORMULAIRE -- Créer un fichier form.js à part */ 



// DOM Elements 

// Bouton de validation
const btnFormSubmit = document.getElementById("btn-form-submit");
btnFormSubmit.addEventListener('click', formValidation);

// User 
const userFirstName = document.getElementById("user-firstname");
const userLastName = document.getElementById("user-lastname");
const userEmail = document.getElementById("user-email");
const userBirthdate = document.getElementById("user-birthdate");
const userTrnQuantity = document.getElementById("user-trn-quantity");
const cityCheckbox = document.getElementById("city-checkbox");

// Messages d'erreurs 
const infoFirstName = document.getElementById("info-firstname");
const infoLastName = document.getElementById("info-lastname");
const infoEmail = document.getElementById("info-email");
const infoBirthdate = document.getElementById("info-birthdate");
const infoTrnQuanity = document.getElementById("info-trn-quantity");
const infoCityCheckbox = document.getElementById("info-checkbox");

// Regex 
const regexName = /^[a-zA-Z-\s]+$/;
const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexBirthdate = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;

// Comportement en cas de champ valide 
function validInput (selector, message) {
    selector.textContent = message;
    selector.style.color = "green";
    selector.previousElementSibling.style.border = "5px solid green";
    return selector.previousElementSibling.value;
}

// Comportement en cas de champ invalide 
function invalidInput (selector, errorMessage) {
    selector.textContent = errorMessage;
    selector.style.color = "red";
    selector.previousElementSibling.style.border = "5px solid red";
    return false;
}


// TEST PRENOM 
function verifyFirstName() {
    const testFirstname = regexName.test(userFirstName.value);

    if (userFirstName.value === "") {
        return invalidInput (infoFirstName, "Merci de renseigner un prénom !!!");
    }
    else if (userFirstName.value.trim().length <2) {
        return invalidInput (infoFirstName, "Le prénom doit être composé d'au moins deux caractères !!!");
    }
    else if (testFirstname === false) {
        return invalidInput (infoFirstName, "Format incorrect !!!");
    }
    else {
        return validInput (infoFirstName, "Prénom validé !!!")
    }
}



// TEST VALIDATION DU FORMULAIRE
function formValidation(e) {
    e.preventDefault();

    let validFirstName = verifyFirstName();

    if(validFirstName) {

        let formData = new FormData();

        formData.append('firstName', verifyFirstName);
    }

    // confirmationModale();
}