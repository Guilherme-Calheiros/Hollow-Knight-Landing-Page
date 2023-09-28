const arrowBtns = document.querySelectorAll('.wrapper > img');
const carousel = document.querySelector('.carousel');
const firstCardWidth = carousel.querySelector('.card').offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === "left_arrow" ? -firstCardWidth : firstCardWidth;
    })
});
