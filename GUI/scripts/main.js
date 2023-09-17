const { remote } = require('electron')

function loadCont(url, element) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            element.innerHTML = data
        })
        .catch(error => console.error(error))
}

function account_page() {
    var acc_div = document.getElementById("profile_page")
    loadCont("../templates/profile.html", acc_div)
}

function close_window() {
    console.log("Closing...")
    remote.getCurrentWindow().quit()
}

function minimize_window() {
    console.log("Minimizing...")
    remote.getCurrentWindow().minimize()
}

function search() {
    
}