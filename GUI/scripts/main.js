
/**
 * Loads the content from the specified URL and updates the current page
 * with the retrieved data.
 *
 * @param {string} url - The URL of the content to load.
 * @return {Promise} A Promise that resolves with the loaded content.
 */
function loadCont(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("current_page").innerHTML = data
        })
        .catch(error => console.error(error))
}

function toggleNullText() {
    var input = document.getElementsByClassName("search-bar")[0]
    var text = document.getElementById("no-text-search")
    
    console.log(input.value)
    if (input.value == null || input.value == "") {
        text.classList.add("horizTranslate")
        text.style.visibility = "hidden"
    } else {
        text.classList.remove("horizTranslate")
        text.style.visibility = "visible"
    }
}

function account_page() {
    loadCont("../templates/profile.html")
}

function close_window() {
    console.log("Closing...")
    windowApi.close()
}

function minimize_window() {
    console.log("Minimizing...")
    windowApi.minimize()
}

function search_page() {
    var search_bar = document.getElementById("search-bar")
    search_bar.style.visibility = "visible"
    loadCont("../templates/search.html")
    document.getElementsByClassName("search-bar")[0].addEventListener("change", toggleNullText);
}