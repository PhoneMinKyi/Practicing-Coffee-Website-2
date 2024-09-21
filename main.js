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

var swiper = new Swiper(".review-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });