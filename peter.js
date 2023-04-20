// Filter list med active onclick - Peter Søgaard

let filterListArray = ["Sport", "Spil", "Gaming", "Fest", "Motion", "Studie", "Musik", "Andet"]
let filterListContainer = document.getElementById("filter-list-container")

    for (let i = 0; i < filterListArray.length; i++) {
        let li = document.createElement('li');
        li.innerText = filterListArray[i];
        filterListContainer.appendChild(li);

    }

    function activateLiElements() {
        let liElements = document.querySelectorAll('#filter-list-container li');
        liElements.forEach(function (li) {
          li.addEventListener('click', function () {
            if (li.style.backgroundColor === 'rgb(200, 226, 223)') {
              li.style.backgroundColor = '';
            } else {
              li.style.backgroundColor = 'rgb(200, 226, 223)';
            }
          });
        });
      }
      
      activateLiElements();