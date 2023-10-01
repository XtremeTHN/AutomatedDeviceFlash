function toggleButtonColor(btt_id) {
    var button = document.getElementById(btt_id);
    console.log("toggle")
    if (button.classList.contains("clicked")) {
        console.log("adding")
        button.classList.remove("clicked");
    } else {
        console.log("removing")
        button.classList.add("clicked");
    }
}


function profile_page() {
    toggleButtonColor("profile_btt");
}