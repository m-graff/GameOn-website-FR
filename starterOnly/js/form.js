/* FORMULAIRE */ 


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

// Regex 
const regexName = /^[a-zA-Z-\s]+$/;

// Comportement en cas de champ valide 
function validInput (selector, message) {
    selector.textContent = message;
    selector.style.color = "green";
    selector.style.fontSize = "15px";
    return true;
}

// Comportement en cas de champ invalide 
function invalidInput (selector, errorMessage) {
    selector.textContent = errorMessage;
    selector.style.color = "red";
    selector.style.fontSize = "15px";
    selector.previousElementSibling.style.border = "5px solid red";
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
        return invalidInput (infoFirstName, "Merci de renseigner un prénom !");
    }
    if (userFirstName.value.trim().length <2) {
        return invalidInput (infoFirstName, "Le prénom doit être composé d'au moins deux caractères !");
    }
    if (testFirstname === false) {
        return invalidInput (infoFirstName, "Format incorrect !");
    }
    return validInput (infoFirstName, "Prénom valide !");
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
    const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
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
// Création d'un objet date afin de vérifier si l'utilisateur est bien majeur
function verifyBirthdate() {

        let isValidDate = new Date(userBirthdate.value);
        const todayDate = new Date();
        isValidDate.setFullYear(isValidDate.getFullYear() + 18);

console.log(isValidDate);
    if (userBirthdate.value === "") {
    return invalidInput (infoBirthdate, "Merci de renseigner votre date de naissance !");
    }
    console.log(isValidDate, todayDate);
    if (isValidDate > todayDate) {
        return invalidInput (infoBirthdate, "Vous devez être majeur pour vous inscrire !");
    }
    return validInput (infoBirthdate, "Date de naissance valide !");
};





// Vérification Input Nombre de tournois participés
function verifyTrnQuantity() {
    if (userTrnQuantity.value === "") {
        return invalidInput (infoTrnQuanity, "Merci de renseigner un nombre de participations !");
    }

    // --------- AJOUTER L'OBLIGATION DE SAISIR UNE VALEUR NUMERIQUE (NON FONCTIONNELLE, REGEX ?) -------
    if (userTrnQuantity.value === isNaN) {
        return invalidInput (infoTrnQuanity, "Merci de saisir une valeur numérique !");
    }

    return validInput (infoTrnQuanity, "Nombre de participations valide !");
};





// Vérification Inputs Choix des villes ayant déjà participés 
const cityCheckbox = document.getElementById("city-checkbox");              // Contenant checkbox villes
const cityCheckboxBtn = document.querySelectorAll("input[type=radio]");     // Boutons checkbox villes
let arrayCityCheckbox =  Array.from(cityCheckboxBtn).find(i => i.checked);
cityCheckboxBtn.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        arrayCityCheckbox = 
            Array.from(cityCheckboxBtn)     // Convertion des checkboxs en tableau afin d'utiliser la méthode filter et map
                .find(i => i.checked)       // Sélection du bouton coché 
            arrayCityCheckbox = arrayCityCheckbox !== null;
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

console.log(validFirstName, validLastName, validEmail, validBirthdate, validTrnQuantity, userCguCheck, arrayCityCheckbox, validCity );

    if(validFirstName && validLastName && validEmail && validBirthdate && validTrnQuantity && userCguCheck && arrayCityCheckbox && validCity) {

        let formData = new FormData();

        formData.append('firstName', validFirstName);
        formData.append('lastName', validLastName);
        formData.append('email', validEmail);
        formData.append('birthdate', validBirthdate);
        formData.append('trnQuantity', validTrnQuantity);
        formData.append('newsletter', userNewsletter.checked);

        for (let [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}

       closeModal();
       confirmModalDisplay();
       
    }
    
}