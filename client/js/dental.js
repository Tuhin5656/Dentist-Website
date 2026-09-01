let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".main-header .nav-menu");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


// Team Carousel Initialization
const teamCarousel = new Swiper(".team-carousel", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});