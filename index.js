const startPage = document.getElementById("startPage");
const btnSignIn = document.getElementById("signIn");
const registrationModal = document.getElementById("registerModal");
const inputUserName = document.getElementById("inputUserName");
const inputUserSurname = document.getElementById("inputUserSurname");
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const inputRepeatPassword = document.getElementById("inputRepeatPassword");
const inputPhone = document.getElementById("inputPhone");
const inputCheck = document.getElementById("inputCheck");
const btnCreateAccount = document.getElementById("btnCreateAccount");
const welcomeWindow = document.getElementById("welcomeModal");

let errorUserName = document.getElementById("errorUserName");
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");
let errorRepeatPassword = document.getElementById("errorRepeatPassword");
let errorPhone = document.getElementById("errorPhone");
let errorInputChecked = document.getElementById("errorInputChecked");
const errors = [
  errorUserName,
  errorEmail,
  errorPassword,
  errorRepeatPassword,
  errorPhone,
  errorInputChecked,
];

btnSignIn.addEventListener("click", function () {
  startPage.style.display = "none";
  registrationModal.style.display = "block";
});

function validForm() {
  errors.forEach((elem) => {
    elem.innerHTML = "";
  });
  // errorUserName.innerHTML = "";
  // errorEmail.innerHTML = "";
  // errorPassword.innerHTML = "";
  // errorRepeatPassword.innerHTML = "";
  // errorPhone.innerHTML = "";
  // errorInputChecked.innerHTML = "";

  let isValid = true;

  if (inputUserName.value == "" || inputUserSurname.value == "") {
    isValid = false;
    errorUserName.innerHTML +=
      "You have not filled in the first name and/or surname field<br/>";
  }

  if (
    (inputUserName.value.length > 0 && inputUserName.value.length < 2) ||
    (inputUserSurname.value.length > 0 && inputUserSurname.value.length < 2)
  ) {
    isValid = false;
    errorUserName.innerHTML += "Your name and/or surname is too short";
  }

  if (inputEmail.value == "") {
    isValid = false;
    errorEmail.innerHTML += "You did not provide an email";
  }

  if (inputPassword.value == "") {
    isValid = false;
    errorPassword.innerHTML += "You need to think of a password";
  }

  if (inputPassword.value.length > 0 && inputPassword.value.length < 6) {
    isValid = false;
    errorPassword.innerHTML +=
      "Your password is too short, a minimum of 6 characters is allowed";
    console.log(345);
  }

  if (inputPassword.value != inputRepeatPassword.value) {
    isValid = false;
    errorRepeatPassword.innerHTML += "Passwords do not match";
  }

  if (inputPhone.value == "") {
    isValid = false;
    errorPhone.innerHTML += "You did not provide a mobile phone number";
  }

  if (inputPhone.value.length > 0 && inputPhone.value.length < 12) {
    isValid = false;
    errorPhone.innerHTML +=
      "Are you sure you have the right phone number? Perhaps you have missed a few digits.";
  }

  if (!inputCheck.checked) {
    isValid = false;
    errorInputChecked.innerHTML +=
      "You need to tick the box if you agree with Policy.";
  }

  return isValid;
}

btnCreateAccount.addEventListener("click", function () {
  if (validForm()) {
    registrationModal.style.display = "none";
    welcomeWindow.style.display = "block";
    document.getElementById(
      "welcome-text"
    ).innerHTML += `Welcome to Booo!, dear&nbsp;<b> ${inputUserName.value}</b>`;
  }
});
