
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

// var audio = new Audio('../assets/src/george-michael-careless-whisper.mp3');


var ligado = false;
var audio;
var music_playing = 0;

function tocar_musica(caminho_musica) {
    var play_music = document.getElementById(caminho_musica);
    if (music_playing == 0) 
    {
        audio = new Audio('../assets/src/' + caminho_musica);
        music_playing = caminho_musica;
        audio.play();
        play_music.classList.add('ph-pause');
        play_music.classList.remove('ph-play');
    } 
    else if (music_playing != caminho_musica) 
    {
        audio.pause();
        audio = new Audio('../assets/src/' + caminho_musica);
        play_last_music = document.getElementById(music_playing);
        music_playing = caminho_musica;
        play_last_music.classList.remove('ph-pause');
        play_last_music.classList.add('ph-play');
        play_music.classList.add('ph-pause');
        play_music.classList.remove('ph-play');
        audio.play(); 
    } 
    else 
    {
        audio.pause();
        music_playing = 0;
        play_music.classList.remove('ph-pause');
        play_music.classList.add('ph-play');
    }

        audio.addEventListener('ended', function() {
        play_music.classList.remove('ph-pause');
        play_music.classList.add('ph-play');
    });
}

var playlist = [];
const minha_playlist = document.getElementById('minha_playlist');
const div_playlist = document.querySelectorAll('.div_playlist');
const nome_musica = document.querySelector('.nome_musica');
const titulo_musica = document.querySelectorAll('.title-1');


var title = document.querySelector('title-1');


function add_playlist(caminho_musica) {
    var play_music = document.getElementById(caminho_musica);
    var caminho = '../assets/src/' + caminho_musica;
    var existe = false;
    
    for (var i = 0; i < playlist.length; i++) {
        // Tem link igual no caminho? Se tiver...
        if (playlist[i] == caminho) {
            playlist.splice(i, 1); // Tira a musica da lista
            nome_musica.innerHTML = playlist;
            existe = true;
            play_music.classList.remove('ph-fill');
            play_music.classList.add('ph-thin'); 
        } 
    }  
    if (existe == false) {
        playlist.push(caminho); // Add a musica da lista
        nome_musica.innerHTML = playlist[i];
        play_music.classList.remove('ph-thin');
        play_music.classList.add('ph-fill');
    }
    console.log(playlist);
    

}








