const email = document.getElementById('email')
const emailError = document.getElementById('email-error')

email.addEventListener('input', (e) => {
    if (email.validity.valid) {
        emailError.textContent = ''
    }
    else 
        showEmailError();
});

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'This is a required field'
    }
    else if (email.validity.typeMismatch) {
        emailError.textContent = 'Value must be a valid email'
    }
};

const country = document.getElementById('country')
const countryError = document.getElementById('country-error')

country.addEventListener('input', (e) => {
    if (country.validity.valid) {
        countryError.textContent = '';
    }
    else 
        countryError.textContent = 'This is a required field'
        // showCountryError();
})

const zip = document.getElementById('zip-code')
const zipError = document.getElementById('zip-error')

zip.addEventListener('input', (e) => {
    if (zip.validity.valid) {
        zipError.textContent = '';
    }
    else 
        showZipError();
})

function showZipError() {
    if (zip.validity.valueMissing) {
        zipError.textContent = 'This is a required field'
    }
    else if (zip.validity.patternMismatch) {
        zipError.textContent = 'Must be 5 digits'
    }
}

const password = document.getElementById('password')
const passError = document.getElementById('password-error')

password.addEventListener('input', (e) => {
    if (password.validity.valid) {
        passError.textContent = '';
    }
    else 
        showPasswordError();
})

function showPasswordError() {
    if (password.validity.valueMissing) {
        passError.textContent = 'This is a required field'
    }
    else if (password.validity.patternMismatch) {
        passError.textContent = 'Password not secure'
    }
}

const passwordVal = document.getElementById('password-validation')
const passValError = document.getElementById('password-validation-error')

passwordVal.addEventListener('input', (e) => {
    if (passwordVal.value == password.value) {
        passValError.textContent = '';
    }
    else 
        passValError.textContent = 'Passwords must match';
})

const submitButton = document.getElementById('submit-button')

function submitForm() {
    if (email.validity.valid && country.validity.valid && zip.validity.valid && password.validity.valid && passwordVal.value == password.value) {
        alert('High Five!')
    }
    else alert('Please fix your form')
};

submitButton.addEventListener('click', submitForm)




