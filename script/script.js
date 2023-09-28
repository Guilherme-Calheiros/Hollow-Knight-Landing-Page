const arrowBtns = document.querySelectorAll('.wrapper > img');
const carousel = document.querySelector('.carousel');
const firstCardWidth = carousel.querySelector('.card').offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === "left_arrow" ? -firstCardWidth : firstCardWidth;
    })
});

const imagens = [
    "../images/ferrao.png",
    "../images/mascara.jpg",
    "../images/knight-jump.png"
];
let imageElement = document.getElementById("homeImage")
let index = 0;

function alterarImagens(){
    imageElement.style.opacity = 0;
    setTimeout(() => {
        imageElement.src = imagens[index];
        index = (index + 1) % imagens.length;
        imageElement.style.opacity = 1;
    }, 1000)
}

setInterval(alterarImagens, 5000);