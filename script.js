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

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    const updateIcon = () => {
        if (bodyElement.classList.contains('dark-mode')) {
            themeToggleButton.querySelector('.material-icons').textContent = 'dark_mode';
        } else {
            themeToggleButton.querySelector('.material-icons').textContent = 'light_mode';
        }
    };

    updateIcon();

    themeToggleButton.addEventListener('click', () => {
        if (bodyElement.classList.contains('dark-mode')) {
            bodyElement.classList.remove('dark-mode');
            bodyElement.classList.add('light-mode');
            themeToggleButton.innerHTML = '<span class="material-icons">dark_mode</span>';
        } else {
            bodyElement.classList.remove('light-mode');
            bodyElement.classList.add('dark-mode');
            themeToggleButton.innerHTML = '<span class="material-icons">light_mode</span>';
        }
        updateIcon();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carousel) => {
        const container = carousel.querySelector('.carousel-container');
        const items = carousel.querySelectorAll('.carousel img');
        let currentIndex = 0;

        const prevButton = carousel.querySelector('.previous');
        const nextButton = carousel.querySelector('.next');

        prevButton.addEventListener('click', () => moveSlide(carousel, -1));
        nextButton.addEventListener('click', () => moveSlide(carousel, 1));

        function moveSlide(carousel, direction) {
            const totalSlides = items.length;
            currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
            container.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });
});
