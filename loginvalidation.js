function ValidateEmail(input)
{

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailError = document.getElementById("email-error");
  let formInput = document.getElementById("email-input");

  if (input.value.match(validRegex)){
    emailError.innerHTML = "";
    formInput.style.borderColor = "rgb(249, 247, 240)";
    formInput.value = '';
    document.lnform.text1.focus();
    return false;
  }
    else {
    emailError.innerHTML = "Indtast gyldig e-mailadresse";
    emailError.style.color = "red";
    formInput.style.borderColor = "red";
    document.lnform.text1.focus();
    return false;
  }
}
