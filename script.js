function openNav() {
    document.getElementById("navSidebar").style.width = "240px";
    document.getElementById("main").style.marginLeft = "240px";
    document.body.classList.add("sidenav-open");
}

function closeNav() {
    document.getElementById("navSidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.classList.remove("sidenav-open");
}

function scrollToTop() {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function search() {
    var input, filter, assetContainer, assets, i, img, fileName;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    assetContainer = document.getElementById("assetContainer");
    assets = assetContainer.getElementsByClassName("alpha");

    for (i = 0; i < assets.length; i++) {
        img = assets[i].getElementsByTagName("img")[0];
        fileName = img.alt;
        if (fileName.toUpperCase().indexOf(filter) > -1) {
            assets[i].style.display = "";
        } else {
            assets[i].style.display = "none";
        }
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        search();
    }
}