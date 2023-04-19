let filterListArray = ["Sport", "Spil", "Gaming", "Fest", "Motion", "Studie", "Musik", "Andet"]
const filterListContainer = document.getElementById("filter-list-container")

function list() {


    if (2+2==4) {
        for (let i = 0; i < filterListArray.length; i++) {
            let li = document.createElement('li');
            li.innerText = filterListArray[i];
            filterListContainer.appendChild(li);
        }
    } else {
        console.log("Math is finished and we are doomed")
    }
}

list()
