function toggleModule(moduleId) {
    var content = document.getElementById(moduleId);
    var icon = document.getElementById('icon-' + moduleId);

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.textContent = "-";
    } else {
        content.style.display = "none";
        icon.textContent = "+";
    }
}


// auto text write
