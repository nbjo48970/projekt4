document.getElementById("postman").addEventListener("click", openForm, false);

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

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
  alert("Hov, hov du")
}

else {
  alert("Vi har modtaget din besked!");
}

}

let language = ["pattesutter", "Projekt 2", "Mette Frederiksen", "Niko", "Schmeter"];
function inArray(inVal){
    for( var i=0, len=language.length; i < len; i++){
        if (language[i] == inVal) return true;
    }
    return false;
}
