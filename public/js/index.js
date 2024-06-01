
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

// var audio = new Audio('./assets/src/george-michael-careless-whisper.mp3');


var ligado = false;
var audio;
var music_playing = 0;

function tocar_musica(caminho_musica) {
    var play_music = document.getElementById(caminho_musica);
    if (music_playing == 0) 
    {
        audio = new Audio('./assets/src/' + caminho_musica);
        music_playing = caminho_musica;
        audio.play();
        play_music.classList.add('ph-pause');
        play_music.classList.remove('ph-play');
    } 
    else if (music_playing != caminho_musica) 
    {
        audio.pause();
        audio = new Audio('./assets/src/' + caminho_musica);
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
    var caminho = './assets/src/' + caminho_musica;
    var existe = false;
    
    for (var i = 0; i < playlist.length; i++) {
        // Tem link igual no caminho? Se tiver...
        if (playlist[i] == caminho) {
            playlist.splice(i, 1); // Tira a musica da lista
            existe = true;
            play_music.classList.remove('ph-fill');
            play_music.classList.add('ph-thin'); 
        } 
    }  
    if (existe == false) {
        playlist.push(caminho); // Add a musica da lista
        play_music.classList.remove('ph-thin');
        play_music.classList.add('ph-fill');
    }
    console.log(playlist);
    

}
// usar JSON aqui:
function validarSessao(){
    var nome = sessionStorage.NOME_USUARIO;
    if( nome != undefined){
        document.getElementById("tema-rock").style.display = 'block';
        document.getElementById("tema-ufa").style.display = 'block';
        document.getElementById("tema-george").style.display = 'block';
        document.getElementById("tema-michael").style.display = 'block';
        document.getElementById("tema-bee").style.display = 'block';
        document.getElementById("tema-earth").style.display = 'block';
        document.getElementById("tema-village").style.display = 'block';
        document.getElementById("tema-kool").style.display = 'block';
        document.getElementById("tema-cyndi").style.display = 'block';
        document.getElementById("tema-whitney").style.display = 'block';
        document.getElementById("tema-madonna").style.display = 'block';
        document.getElementById("tema-roupa").style.display = 'block';
        document.getElementById("tema-rita").style.display = 'block';
        document.getElementById("tema-fevers").style.display = 'block';
        document.getElementById("tema-legiao").style.display = 'block';
        document.getElementById("tema-lulu").style.display = 'block';
        document.getElementById("tema-leo").style.display = 'block';
        document.getElementById("tema-barao").style.display = 'block';
        document.getElementById("tema-paralamas").style.display = 'block';
        document.getElementById("tema-rpm").style.display = 'block';


        document.getElementById("div_btns").style.display = "none";
        document.getElementById("div_usuario").style.display = "flex";
        document.getElementById("li_dash").style.display = "flex";

    }
    else {
        document.getElementById("tema-rock").style.display = 'none';
        document.getElementById("tema-ufa").style.display = 'none';
        document.getElementById("tema-george").style.display = 'none';
        document.getElementById("tema-michael").style.display = 'none';
        document.getElementById("tema-bee").style.display = 'none';
        document.getElementById("tema-earth").style.display = 'none';
        document.getElementById("tema-village").style.display = 'none';
        document.getElementById("tema-kool").style.display = 'none';
        document.getElementById("tema-cyndi").style.display = 'none';
        document.getElementById("tema-whitney").style.display = 'none';
        document.getElementById("tema-madonna").style.display = 'none';
        document.getElementById("tema-roupa").style.display = 'none';
        document.getElementById("tema-rita").style.display = 'none';
        document.getElementById("tema-fevers").style.display = 'none';
        document.getElementById("tema-legiao").style.display = 'none';
        document.getElementById("tema-lulu").style.display = 'none';
        document.getElementById("tema-leo").style.display = 'none';
        document.getElementById("tema-barao").style.display = 'none';
        document.getElementById("tema-paralamas").style.display = 'none';
        document.getElementById("tema-rpm").style.display = 'none';
    }
}

function limparSessao() {
    sessionStorage.clear();
    document.getElementById("div_btns").style.display = "flex";
    document.getElementById("div_usuario").style.display = "none";
    document.getElementById("li_dash").style.display = "none";
}

document.getElementById("imagem_usuario");


