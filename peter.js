let filterListArray = ["Sport", "Spil", "Gaming", "Fest", "Motion", "Studie", "Musik", "Andet"]
const filterListContainer = document.getElementById("filter-list-container")

function list() {

    

    for (let i = 0; i < filterListArray.length; i++) {
        let li = document.createElement('li');
        li.innerText = filterListArray[i];
        filterListContainer.appendChild(li);
    }
}

list()
