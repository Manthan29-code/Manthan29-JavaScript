const form = document.getElementById('registrationForm');
const submitBtn = document.getElementById('submitBtn');


const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const dob = document.getElementById('dob');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const terms = document.getElementById('terms');


const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const dobError = document.getElementById('dobError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');


const validateName = () => {
    if (fullName.value.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        fullName.classList.add('invalid');
        return false;
    }
    nameError.textContent = "";
    fullName.classList.add('valid');
    return true;
};

const validateEmail = () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        emailError.textContent = "Enter a valid email.";
        email.classList.add('invalid');
        return false;
    }
    emailError.textContent = "";
    email.classList.add('valid');
    return true;
};

const validatePhone = () => {
    if (phone.value.length !== 10) {
        phoneError.textContent = "Phone must be 10 digits.";
        phone.classList.add('invalid');
        return false;
    }
    phoneError.textContent = "";
    phone.classList.add('valid');
    return true;
};

const validateDOB = () => {
    const dobValue = new Date(dob.value);
    const age = new Date().getFullYear() - dobValue.getFullYear();
    if (age < 18) {
        dobError.textContent = "You must be at least 18 years old.";
        dob.classList.add('invalid');
        return false;
    }
    dobError.textContent = "";
    dob.classList.add('valid');
    return true;
};

const validatePassword = () => {
    const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!password.value.match(passwordPattern)) {
        passwordError.textContent = "Password must be at least 8 characters with one special character.";
        password.classList.add('invalid');
        return false;
    }
    passwordError.textContent = "";
    password.classList.add('valid');
    return true;
};

const validateConfirmPassword = () => {
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPassword.classList.add('invalid');
        return false;
    }
    confirmPasswordError.textContent = "";
    confirmPassword.classList.add('valid');
    return true;
};

// Event Listeners
form.addEventListener('input', () => {
    const isValid =
        validateName() &&
        validateEmail() &&
        validatePhone() &&
        validateDOB() &&
        validatePassword() &&
        validateConfirmPassword() &&
        terms.checked;
    submitBtn.disabled = !isValid;
});