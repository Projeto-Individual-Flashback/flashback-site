/* Rolagem do HEADER - INICIO */
window.addEventListener("scroll", function() {
    var header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0);
})
/* Rolagem do HEADER - FIM */

/* SLIDEBANNER - INICIO */
var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));
/* SLIDEBANNER - FIM */

/* FUNCAO - INICIO */
// window.addEventListener("scroll", function() {
//     var header = document.querySelector('#header')
//     header.classList.toggle('rolagem', window.scrollY > 0);
// })
/* FUNCAO - FIM */

var audio = new Audio('../assets/src/george-michael-careless-whisper.mp3');

var ligado = false;

const play_music = document.getElementById("play_music");

play_music.addEventListener('click', tocar_musica);

function tocar_musica() {
    if (ligado == false) {
        audio.play();
        ligado = true;
        play_music.classList.add('ph-pause');
        play_music.classList.remove('ph-play');
    } else {
        audio.pause();
        ligado = false;
        play_music.classList.remove('ph-pause');
        play_music.classList.add('ph-play');
    }
}

