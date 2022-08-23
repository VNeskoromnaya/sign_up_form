const startPage = document.getElementsByClassName("startPage");
const btnSignIn = document.getElementById("signIn");
const modalWindow = document.getElementsByClassName("modal-dialog");
const inputUserName = document.getElementById("inputUserName");
const inputUserSurname = document.getElementById("inputUserSurname");
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const inputRepeatPassword = document.getElementById("inputRepeatPassword");
const inputPhone = document.getElementById("inputPhone");
const inputCheck = document.getElementById("inputCheck");
const btnCreateAccount = document.getElementById("btnCreateAccount");
const welcomeWindow = document.getElementsByClassName("modalWelcome-wrp");

btnSignIn.addEventListener("click", function openModalWindow() {
  startPage[0].style.display = "none";
});

function validForm() {
  document.getElementById("errorUserName").innerHTML = "";
  document.getElementById("errorEmail").innerHTML = "";
  document.getElementById("errorPassword").innerHTML = "";
  document.getElementById("errorRepeatPassword").innerHTML = "";
  document.getElementById("errorPhone").innerHTML = "";
  document.getElementById("errorInputChecked").innerHTML = "";

  let isValid = true;

  if (inputUserName.value == "" || inputUserSurname.value == "") {
    isValid = false;
    document.getElementById("errorUserName").innerHTML +=
      "You have not filled in the first name and/or surname field<br/>";
  }

  if (
    (inputUserName.value.length > 0 && inputUserName.value.length < 2) ||
    (inputUserSurname.value.length > 0 && inputUserSurname.value.length < 2)
  ) {
    isValid = false;
    document.getElementById("errorUserName").innerHTML +=
      "Your name and/or surname is too short";
  }

  if (inputEmail.value == "") {
    isValid = false;
    document.getElementById("errorEmail").innerHTML +=
      "You did not provide an email";
  }

  if (inputPassword.value == "") {
    isValid = false;
    document.getElementById("errorPassword").innerHTML +=
      "You need to think of a password";
  }

  if (inputPassword.value.length > 0 && inputPassword.value.length < 6) {
    isValid = false;
    document.getElementById("errorPassword").innerHTML +=
      "Your password is too short, a minimum of 6 characters is allowed";
    console.log(345);
  }

  if (inputPassword.value != inputRepeatPassword.value) {
    isValid = false;
    document.getElementById("errorRepeatPassword").innerHTML +=
      "Passwords do not match";
  }

  if (inputPhone.value == "") {
    isValid = false;
    document.getElementById("errorPhone").innerHTML +=
      "You did not provide a mobile phone number";
  }

  if (inputPhone.value.length > 0 && inputPhone.value.length < 12) {
    isValid = false;
    document.getElementById("errorPhone").innerHTML +=
      "Are you sure you have the right phone number? Perhaps you have missed a few digits.";
  }

  if (!inputCheck.checked) {
    isValid = false;
    document.getElementById("errorInputChecked").innerHTML +=
      "You need to tick the box if you agree with Policy.";
  }

  return isValid;
}

btnCreateAccount.addEventListener("click", function singIn() {
  if (validForm()) {
    modalWindow[0].style.display = "none";
    welcomeWindow[0].style.display = "block";
    document.getElementById(
      "welcome-text"
    ).innerHTML += `Welcome to Booo!, dear&nbsp;<b> ${inputUserName.value}</b>`;
  }
});
