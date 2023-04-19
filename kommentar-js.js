document.getElementById("postman").addEventListener("click", openForm, false);
// document.getElementById("okay").addEventListener("click", okay, false);

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// function okay() {
//   document.getElementById("modtaget").style.display = "none";
// }

let chatError = document.getElementById("chat-error");
let formInput = document.getElementById("support");
// function myDrop() {
//   document.getElementById("myDropdown").classList.toggle("lookatmenow");
// }
//
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('lookatmenow')) {
//         openDropdown.classList.remove('lookatmenow');
//       }
//     }
//   }
// }

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
        if (language[i] == inVal) return true;
    }
    return false;
}
