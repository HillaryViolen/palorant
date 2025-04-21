document.addEventListener('DOMContentLoaded', function () {
    const mainImg = document.querySelector('.main__container img');
    const thumbnails = document.querySelectorAll('.slide__image');
    const prevBtn = document.querySelector('.maps__prev');
    const nextBtn = document.querySelector('.maps__next');
    const sliderContainer = document.querySelector(".slider__container");

    if (!mainImg || thumbnails.length === 0 || !prevBtn || !nextBtn) return;

    let currIndex = 0;

    function updateMainImage(index) {
        if (index < 0) index = thumbnails.length - 1;
        if (index >= thumbnails.length) index = 0;

        currIndex = index;

        const thumbnailImg = thumbnails[index].querySelector('img');
        if (!thumbnailImg) return;
        mainImg.src = thumbnailImg.src;
        mainImg.alt = mainImg.alt;

        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === currIndex);
        });

        const thumbWidth = thumbnails[0].offsetWidth; // asumsi semua sama
        sliderContainer.scrollTo({
            left: index * thumbWidth,
            behavior: 'smooth'
        });
    }

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            updateMainImage(index);
        });
    });

    prevBtn.addEventListener('click', () => {
        updateMainImage(currIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        updateMainImage(currIndex + 1);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            updateMainImage(currIndex - 1);
        }
        else if (e.key === 'ArrowRight') {
            updateMainImage(currIndex + 1);
        }
    });

    updateMainImage(0);
});


const mapMenu = document.getElementById("maps-menu");
mapMenu.addEventListener("change", (e) => {
    const selectedMap = e.target.value;

    const basePath = window.location.pathname.split('/').slice(0, -2).join('/');
    window.location.pathname = `../${mapMenu.value}/${mapMenu.value}.html`;
    window.location.pathname = `${basePath}/${selectedMap}/${selectedMap}.html`;
});

const curr = window.location.pathname.toLowerCase();
const mapBtn = document.querySelectorAll('.maps-btn');

mapBtn.forEach(btn => {
    const mapName = btn.textContent.toLowerCase().trim();

    if(curr.includes(`/${mapName}.html`)){
        btn.classList.add("active");
    }
    else{
        btn.classList.remove("active");
    }
})
