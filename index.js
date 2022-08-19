const inputUserName = document.getElementById("inputUserName");
const inputUserSurname = document.getElementById("inputUserSurname");
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const inputRepeatPassword = document.getElementById("inputRepeatPassword");
const inputPhone = document.getElementById("inputPhone");
const inputCheck = document.getElementById("inputCheck");
const btnCreateAccount = document.getElementById("btnCreateAccount");

function validForm() {
  document.getElementById("errorUserName").innerHTML = "";
  document.getElementById("errorEmail").innerHTML = "";
  document.getElementById("errorPassword").innerHTML = "";
  document.getElementById("errorRepeatPassword").innerHTML = "";
  document.getElementById("errorPhone").innerHTML = "";

  if (inputUserName.value == "" || inputUserSurname.value == "") {
    document.getElementById("errorUserName").innerHTML +=
      "You have not filled in the first name and/or surname field";
  }

  if (inputEmail.value == "") {
    document.getElementById("errorEmail").innerHTML +=
      "You did not provide an email";
  }

  if (inputPassword.value == "") {
    document.getElementById("errorPassword").innerHTML +=
      "You need to think of a password";
  }

  if (inputPassword.value.length > 0 && inputPassword.value.length < 6) {
    document.getElementById("errorPassword").innerHTML +=
      "Your password is too short, a minimum of 6 characters is allowed";
    console.log(345);
  }

  if (inputPassword.value != inputRepeatPassword.value) {
    document.getElementById("errorRepeatPassword").innerHTML +=
      "Passwords do not match";
  }

  if (inputPhone.value == "") {
    document.getElementById("errorPhone").innerHTML +=
      "You did not provide a mobile phone number";
  }

  if (inputPhone.value.length > 0 && inputPhone.value.length < 12) {
    document.getElementById("errorPhone").innerHTML +=
      "Are you sure you have the right phone number? Perhaps you have missed a few digits.";
  }

  console.log(123);
}

btnCreateAccount.addEventListener("click", validForm);
