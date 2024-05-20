import songs from "./songs.js";
const player = document.querySelector('#player_musica');
const nome_musica = document.querySelector('#musica_nome');
const nome_artista = document.querySelector('#artista_nome');
const slider_volume = document.querySelector('#volume_slider');

const play_pause = document.querySelector('#play');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const progress = document.querySelector('#progress');
const current_time = document.querySelector('.currentTime');
const duration = document.querySelector('.duration');

const text_btn_play = '<i class="ph ph-play"></i>';
const text_btn_pause = '<i class="ph ph-pause"></i>';

var index = 0

play_pause.onclick = () => play_pause_music();

function play_pause_music() {
    if (player.paused) {
        player.play()
        play_pause.innerHTML = text_btn_pause
    } 
    else {
        player.paused()
        play_pause.innerHTML = text_btn_play
    }
}

