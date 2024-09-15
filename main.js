const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle('show')
    if (navLinks.classList.contains('show')
    ) {
        menuIcon.src = "./img/Close.svg"
    } else {
        menuIcon.src = "./img/menu.svg"
    }
})