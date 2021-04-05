var emojis = document.getElementById("emojis")

function toggleVisibility() {
    if (emojis.style.display == "flex") {
        emojis.style.display = "none"
    } else {
        emojis.style.display = "flex"
    }
}
