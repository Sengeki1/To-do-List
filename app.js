document.getElementById('btn').addEventListener("click", function (e) {
    window.location.href="LOGIN.html"
});

function addTask() {

    const inputBox = document.getElementById("input-text");
    const listContainer = document.getElementById("list-container");

    if(inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData ()
    }
    inputBox.value = "";
}

const list = document.getElementById("list-container");

list.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData ()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData ()
    }
}, false);

function saveData () {
    localStorage.setItem("Data", list.innerHTML);
}

function checkTask () {
    list.innerHTML = localStorage.getItem("Data");
}
checkTask ();