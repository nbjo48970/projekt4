//E-mailvalidering start - Nicoline//
function ValidateLogin(input)
{

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailError = document.getElementById("email-error");
  let formInput = document.getElementById("email-input");


  if (inArray(input.value)) {
    emailError.innerHTML = "PERFEKT";
    emailError.style.color = "rgb(80, 65, 57)";
    formInput.style.borderColor = "#e4f1f0";
    location.href='index.html'
    return false;
  }

  if (input.value.match(validRegex)){
    formInput.style.borderColor = "#e4f1f0";
    emailError.innerHTML = "Bruger eksisterer ikke";
    emailError.style.color = "red";
    formInput.style.borderColor = "red";
    document.lnform.inputem.focus();
    return false;
  }
    else {
    emailError.innerHTML = "Ugyldig e-mailadresse";
    emailError.style.color = "red";
    formInput.style.borderColor = "red";
    document.lnform.inputem.focus();
    return false;
  }
}
let regUsers = [["peter@mail.com","hest"], ["xander@mail.com","hest"], ["Niko@mail.com","hest"], ["Markus@mail.com","hest"]];
function inArray(inVal){
    let passwordInput = document.getElementById("password-input").value;
    for( let i=0, len=regUsers.length; i < len; i++){
        if (regUsers[i][0] == inVal && regUsers[i][1]==passwordInput) return true;
    }
    console.log(passwordInput);
    return false;
}
//E-mailvalidering slut - Nicoline//

//Vis kodeord start - Nicoline//
function HidePassword() {
  var pw = document.getElementById("password-input");
    if (pw.type === "password") {
      pw.type = "text";
    }
    else {
      pw.type = "password";
    }
}
//Vis kodeord slut - Nicoline//
