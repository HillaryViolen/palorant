const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const dropDown = document.querySelector(".dropdown");
const dropDownMenu = document.querySelector(".dropdown__menu")

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

dropDown.addEventListener("click", () => {
    if (dropDownMenu.classList.contains("dropdown-active")) {
        dropDownMenu.classList.add("dropdown-deactive");
        dropDownMenu.classList.remove("dropdown-active")
    } else {
        dropDownMenu.classList.add("dropdown-active")
        dropDownMenu.classList.remove("dropdown-deactive")
    }
})




const newsContainer = document.querySelector('.news__container')
const prevBtn = document.querySelector('.news__previous')
const nextBtn = document.querySelector('.news__continue')

if (newsContainer && prevBtn && nextBtn) {
    const scrollAmount = newsContainer.offsetWidth;

    nextBtn.addEventListener('click', function () {
        if (newsContainer.scrollLeft + newsContainer.clientWidth >= newsContainer.scrollWidth) {
            newsContainer.scrollLeft = 0;
        }
        else {
            newsContainer.scrollLeft += scrollAmount;
        }
    });

    prevBtn.addEventListener('click', function () {
        if (newsContainer.scrollLeft === 0) {
            newsContainer.scrollLeft = newsContainer.scrollWidth;
        }
        else {
            newsContainer.scrollLeft -= scrollAmount;
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.maps-slide');
    const mapsPrev = document.querySelector('.maps__prev');
    const mapsNext = document.querySelector('.maps__next');
    const slideContainer = document.querySelector('.maps__all');

    let currentIndex = 0;



    if (!slides.length || !mapsPrev || !mapsNext || !slideContainer) return;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                slide.style.opacity = 1;
                slide.style.zIndex = 1;
                slide.style.transition = 'opacity 0.5s ease-in-out';
            }
            else {
                slide.classList.remove('active');
                slide.style.opacity = 0;
                slide.style.zIndex = 0;
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    mapsNext.addEventListener('click', nextSlide);
    mapsPrev.addEventListener('click', prevSlide);

    slideContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    slideContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    showSlide(currentIndex);
    slideInterval = setInterval(nextSlide, 5000);
});
