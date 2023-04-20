// This magnificent piece of code has been developed by none other than yours truely, Xander, the great and amazing (not to mention incredible handsome), E. Kolviots!

document.getElementById("postman").addEventListener("click", openForm, false);
// document.getElementById("okay").addEventListener("click", okay, false);

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



let chatError = document.getElementById("chat-error");
let formInput = document.getElementById("support");


document.getElementById("send-it").addEventListener("click", watchIt, false);

function watchIt(textaera) {



if (inArray(document.getElementById("support").value)) {
  chatError.innerHTML = "Dit opslag indeholder sprog blokeret af admin";
  chatError.style.color = "red";
  formInput.style.border = "solid red";
  return false;
}

else {
  closeForm();
  document.getElementById("modtaget").style.display = "flex";
  document.getElementById("replace").innerHTML = document.getElementById("support").value
}

}

let language = ["XD", "hest", "xD", "Niko", "Schmeter"];
function inArray(inVal){
    for( var i=0, len=language.length; i < len; i++){
        if (inVal.includes(language[i])) return true;
    }
    return false;
}
