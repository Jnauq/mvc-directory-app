const newArtist = () => {
    let newMenu = document.getElementById("create-new-menu")
    if (newMenu.style.visibility == "visible") {
        document.getElementById('artist-list').style.visibility = "visible"
        document.getElementById("create-new-menu").style.visibility = "hidden"
    } else {
        newMenu.style.visibility = "visible"
        document.getElementById('artist-list').style.visibility = "hidden"
    }
}
