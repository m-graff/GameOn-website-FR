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

// Bouton de validation du formulaire -- MODIFIER EN EVENT SUBMIT SUR LE FORM PLUTOT QUE SUR LE BOUTON
const btnFormSubmit = document.getElementById("btn-form-submit");
btnFormSubmit.addEventListener('click', formValidation);

// User 
const userFirstName = document.getElementById("user-firstname");
const userLastName = document.getElementById("user-lastname");
const userEmail = document.getElementById("user-email");
const userBirthdate = document.getElementById("user-birthdate");
const userTrnQuantity = document.getElementById("user-trn-quantity");

const cityCheckbox = document.getElementById("city-checkbox"); // Contenant checkbox villes
const cityCheckboxBtn = document.querySelectorAll("input[type=checkbox][name=location]"); // Boutons checkbox villes
let arrayCityCheckbox = []; // Tableau vide récupérant les choix des checkboxs
cityCheckbox.style.display = "none"; // Option de choix des villes initialement masquée

const userCgu = document.getElementById("cgu");
const userNewsletter = document.getElementById("newsletter");

// Messages d'erreurs 
const infoFirstName = document.getElementById("info-firstname");
const infoLastName = document.getElementById("info-lastname");
const infoEmail = document.getElementById("info-email");
const infoBirthdate = document.getElementById("info-birthdate");// VERIFIER QUE C'EST UN OBJ DATE (NEW DATE) DEFINIR UN STOP ENTRE 99 et 18 ANS - PRIO VERIF SI MAJEURE 
const infoTrnQuanity = document.getElementById("info-trn-quantity"); // INPUT CLASSIQUE, 0 QUANTITE VALIDE (le user peut avoir participé à 0 tournoi)
const infoCityCheckbox = document.getElementById("info-checkbox"); // RECUPERER UNE VALEUR, PAS DE BOUCLE
const infoCgu = document.getElementById("info-cgu");

// Regex 
const regexName = /^[a-zA-Z-\s]+$/;
const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
//const regexBirthdate = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;

// AJOUTER UN EVENEMENT PAR INPUT (BLUR) POUR DECLARER QUA CHAQUE SORTIE DE CHAMP, LEVENEMENT SE DECLENCHE
// Comportement en cas de champ valide 
function validInput (selector, message) {
    selector.textContent = message;
    selector.style.color = "green";
    selector.style.fontSize = "15px";
    selector.previousElementSibling.style.border = "5px solid green";
    return selector.previousElementSibling.value;
}

// Comportement en cas de champ invalide 
function invalidInput (selector, errorMessage) {
    selector.textContent = errorMessage;
    selector.style.color = "red";
    selector.style.fontSize = "15px";
    selector.previousElementSibling.style.border = "5px solid red";
    return false;
}

// DUPLIQUER LE PRINCIPE POUR CHAQUE CHAMP 
// Vérification Input Prénom
function verifyFirstName() {
    const testFirstname = regexName.test(userFirstName.value);

    if (userFirstName.value === "") {
        return invalidInput (infoFirstName, "Merci de renseigner un prénom !");
    }
    if (userFirstName.value.trim().length <2) {
        return invalidInput (infoFirstName, "Le prénom doit être composé d'au moins deux caractères !");
    }
    if (testFirstname === false) {
        return invalidInput (infoFirstName, "Format incorrect !");
    }
    return validInput (infoFirstName, "Prénom validé !");
};

// Vérification Input Nom
function verifyLastName() {
    const testLastname = regexName.test(userLastName.value);

    if (userLastName.value === "") {
        return invalidInput (infoLastName, "Merci de renseigner un nom !");
    }
    if (userLastName.value.trim().length <2) {
        return invalidInput (infoLastName, "Le nom doit être composé d'au moins deux caractères !");
    }
    if (testLastname === false) {
        return invalidInput (infoLastName, "Format incorrect !");
    }
    return validInput (infoLastName, "Nom valide !");
};

// Vérification Input Email
function verifyEmail() {
    const testEmail = regexEmail.test(userEmail.value);

    if (userEmail.value === "") {
        return invalidInput (infoEmail, "Merci de renseigner un email !");
    }
    if (testEmail === false) {
        return invalidInput (infoEmail, "Format incorrect !");
    }
    return validInput (infoEmail, "Email valide !");
};

// Vérification Input Date de naissance
function verifyBirthdate() {
    if (userBirthdate.value === "") {
        return invalidInput (infoBirthdate, "Merci de renseigner votre date de naissance !");
    }
    if (userBirthdate.value.trim().length <8) {
        return invalidInput (infoBirthdate, "Format incorrect !");
    }
    return validInput (infoBirthdate, "Date de naissance valide !");
};

// Vérification Input Nombre de tournois participés
function verifyTrnQuantity() {
    if (userTrnQuantity.value === "") {
        return invalidInput (infoTrnQuanity, "Merci de renseigner un nombre de participations !");
    }
    return validInput (infoTrnQuanity, "Nombre de participations valide !");
};

// Ecoute de la vérification du nombre de tournois participés. Si >0, alors l'option du choix des villes est affichée à l'utilisateur
userTrnQuantity.addEventListener('input', function ()  {
    if (userTrnQuantity.value >0) {
        cityCheckbox.style.display = "block";
    } else {
        cityCheckbox.style.display = "none";
    }
});
// Vérification Inputs Choix des villes ayant déjà participés 
cityCheckboxBtn.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        arrayCityCheckbox = 
            Array.from(cityCheckboxBtn)     // Convertion des checkboxs en tableau afin d'utiliser la méthode filter et map
                .filter(i => i.checked)     // Sélection et suppression des boutons non cochés
                .map(i => i.value)          // Extraction du bouton coché 
            return arrayCityCheckbox;
    })
});

// Vérification Input Condition générales d'utilisation 
userCgu.addEventListener('change', function() {
    if (this.checked) {
        infoCgu.style.display = "none";
    return userCgu.checked;
    } else {
        infoCgu.style.display = "block";
        infoCgu.textContent = "Veuillez accepter les conditions générales d'utilisation";
        infoCgu.style.color = "red"
    return false;
    };
});

// Vérification Input Newsletter
userNewsletter.addEventListener('change', function() {
    if (this.checked) {
        return userNewsletter.checked;
    } else {
        return false;
    }
});



// TEST VALIDATION DU FORMULAIRE
function formValidation(e) {
    e.preventDefault();

    let validFirstName = verifyFirstName();
    let validLastName = verifyLastName();
    let validEmail = verifyEmail();
    let validBirthdate = verifyBirthdate();
    let validTrnQuantity = verifyTrnQuantity();

    if(validFirstName && validLastName && validEmail && validBirthdate && validTrnQuantity) {

        let formData = new FormData();

        formData.append('firstName', validFirstName);
        formData.append('lastName', validLastName);
        formData.append('email', validEmail);
        formData.append('birthdate', validBirthdate);
        formData.append('trnQuantity', validrnQuantity);
        formData.append('trnCity', arrayCityCheckbox);
        // console.log(firstName, lastName, etc.)
    }

    // confirmationModale();
    // CREER UNE NOUVELLE MODALE DE VALIDATION DE FORMULAIRE 
}