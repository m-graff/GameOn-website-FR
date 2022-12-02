/* FORMULAIRE */ 

// DOM Elements 
// Bouton de validation du formulaire 
const btnFormSubmit = document.getElementById("btn-form-submit");
btnFormSubmit.addEventListener('click', formValidation);

// User 
const userFirstName = document.getElementById("user-firstname");
const userLastName = document.getElementById("user-lastname");
const userEmail = document.getElementById("user-email");
const userBirthdate = document.getElementById("user-birthdate");
const userTrnQuantity = document.getElementById("user-trn-quantity");
const userCgu = document.getElementById("cgu");
const userNewsletter = document.getElementById("newsletter");

// Messages d'erreurs 
const infoFirstName = document.getElementById("info-firstname");
const infoLastName = document.getElementById("info-lastname");
const infoEmail = document.getElementById("info-email");
const infoBirthdate = document.getElementById("info-birthdate");
const infoTrnQuanity = document.getElementById("info-trn-quantity"); 
const infoCityCheckbox = document.getElementById("info-checkbox");
const infoCgu = document.getElementById("info-cgu");

// Regex Nom et Prénom
const regexName = /^[a-zA-Z-\s]+$/;

// Comportement en cas de champ valide 
function validInput (selector, message, input) {
    selector.textContent = message;
    selector.style.color = "green";
    selector.style.fontSize = "15px"; 
    if (input) {
        input.style.border = "none";
    }
    return true;
}

// Comportement en cas de champ invalide 
function invalidInput (selector, errorMessage, input) {
    selector.textContent = errorMessage;
    selector.style.color = "red";
    selector.style.fontSize = "15px";
    input.style.border = "3px solid red";
    return false;
}

// Comportement en cas de champ invalide pour la section du choix de la ville
function invalidInputCity (selector, errorMessage) {
    selector.textContent = errorMessage;
    selector.style.color = "red";
    selector.style.fontSize = "15px";
    return false;
}

// Vérification Input Prénom
function verifyFirstName() {
    const testFirstname = regexName.test(userFirstName.value);

    if (userFirstName.value === "") {
        return invalidInput (infoFirstName, "Merci de renseigner un prénom !", userFirstName);
    }
    if (userFirstName.value.trim().length <2) {
        return invalidInput (infoFirstName, "Le prénom doit être composé d'au moins deux caractères !", userFirstName);
    }
    if (testFirstname === false) {
        return invalidInput (infoFirstName, "Format incorrect !", userFirstName);
    }
    return validInput (infoFirstName, "Prénom valide !", userFirstName);
};

// Vérification Input Nom
function verifyLastName() {
    const testLastname = regexName.test(userLastName.value);

    if (userLastName.value === "") {
        return invalidInput (infoLastName, "Merci de renseigner un nom !", userLastName);
    }
    if (userLastName.value.trim().length <2) {
        return invalidInput (infoLastName, "Le nom doit être composé d'au moins deux caractères !", userLastName);
    }
    if (testLastname === false) {
        return invalidInput (infoLastName, "Format incorrect !", userLastName);
    }
    return validInput (infoLastName, "Nom valide !", userLastName);
};

// Vérification Input Email
function verifyEmail() {
    const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    const testEmail = regexEmail.test(userEmail.value);

    if (userEmail.value === "") {
        return invalidInput (infoEmail, "Merci de renseigner un email !", userEmail);
    }
    if (testEmail === false) {
        return invalidInput (infoEmail, "Format incorrect !", userEmail);
    }
    return validInput (infoEmail, "Email valide !", userEmail);
};

// Vérification Input Date de naissance
// Création d'un objet date afin de vérifier si l'utilisateur est bien majeur
function verifyBirthdate() {
        let isValidDate = new Date(userBirthdate.value);
        const todayDate = new Date();
        isValidDate.setFullYear(isValidDate.getFullYear() + 18);
    if (userBirthdate.value === "") {
    return invalidInput (infoBirthdate, "Merci de renseigner votre date de naissance !", userBirthdate);
    }
    if (isValidDate > todayDate) {
        return invalidInput (infoBirthdate, "Vous devez être majeur pour vous inscrire !", userBirthdate);
    }
    return validInput (infoBirthdate, "Date de naissance valide !", userBirthdate);
};

// Vérification Input Nombre de tournois participés
function verifyTrnQuantity() {
    // Vérification que la saisie soit bien une valeure numérique
    if (isNaN(parseInt(userTrnQuantity.value))) {
        return invalidInput (infoTrnQuanity, "Merci de saisir une valeur numérique !", userTrnQuantity);
    }
    return validInput (infoTrnQuanity, "Nombre de participations valide !", userTrnQuantity);
};

// Vérification Inputs Choix des villes ayant déjà participés 
const cityCheckbox = document.getElementById("city-checkbox");              // Contenant checkbox villes
const cityCheckboxBtn = document.querySelectorAll("input[type=radio]");     // Boutons checkbox villes
let arrayCityCheckbox =  Array.from(cityCheckboxBtn).find(i => i.checked);  // Boucle sur un tableau pour vérifier si un bouton est coché 
cityCheckboxBtn.forEach(function(checkbox) {                                // Fonction qui créer un évènement pour chaque radio bouton
    checkbox.addEventListener('change', function() {                        // Dès la propagation de l'event, un bouton radio est obligatoirement coché, ce qui vaut à true
        arrayCityCheckbox = true;     
    })
});
function verifyCity() {
    if (!arrayCityCheckbox) {
        return invalidInputCity (infoCityCheckbox, "Merci de renseigner une ville !");
    }
    return validInput (infoCityCheckbox, "Ville valide !");
};

// Vérification Input Condition générales d'utilisation 
let userCguCheck = userCgu.checked;
userCgu.addEventListener('change', function(event) {
    if (event.target.checked) {
        infoCgu.style.display = "none";
        userCguCheck = true;
        return
    } 
        infoCgu.style.display = "block";
        infoCgu.textContent = "Veuillez accepter les conditions générales d'utilisation";
        infoCgu.style.color = "red";
        infoCgu.style.fontSize = "15px";
        userCguCheck = false;
});

// Vérification Input Newsletter
let userNewsletterCheck = userNewsletter.checked;
userNewsletter.addEventListener('change', function(event) {
    userNewsletterCheck = event.target.checked;
});

// Validation du formulaire d'inscription
function formValidation(e) {
    e.preventDefault();

    let validFirstName = verifyFirstName();
    let validLastName = verifyLastName();
    let validEmail = verifyEmail();
    let validBirthdate = verifyBirthdate();
    let validTrnQuantity = verifyTrnQuantity();
    let validCity = verifyCity();

    if(validFirstName && validLastName && validEmail && validBirthdate && validTrnQuantity && userCguCheck && arrayCityCheckbox && validCity) {

       closeModal();
       confirmModalDisplay();
       
    }
}

