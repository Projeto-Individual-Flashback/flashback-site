
// Obtém o contexto do canvas onde o gráfico será desenhado
var ctx2 = document.getElementById('myPieChart').getContext('2d');

// GRAFICO TOP 3 MUSICAS
var dataMusicaFav;

fetch("/usuarios/musicasFav", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        tabela: 'playlist',
    })
}).then(function (resposta) {
    console.log("ESTOU NO THEN DO musicaFav()!")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            dataMusicaFav = json

            
            // Cria um novo gráfico de pizza
            var myPieChart = new Chart(ctx2, {
                type: 'pie', // Tipo do gráfico
                data: {
                    labels: [json[0].titulo, json[1].titulo, json[2].titulo], // Etiquetas das partes da pizza
                    datasets: [{
                        label: 'Quantidade', // Etiqueta do conjunto de dados
                        data: [json[0].quantidadeEscolhas, json[1].quantidadeEscolhas, json[2].quantidadeEscolhas], // Dados do gráfico
                        backgroundColor: [
                            '#f74b6f',
                            '#a02ff2',
                            '#f4f4f4',
                        ],
                        borderWidth: 1 // Largura da borda
                    }]
                },
                options: {
                    responsive: true, // Gráfico responsivo
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: 'white'
                            }
                        },
                        tooltip: {
                            enabled: true // Habilitar tooltips
                        }
                    }
                }
            });

        });

    } else {

        resposta.text().then(texto => {
            console.error(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})


// KPI QUANTIDADE DE MUSICAS DOS USUARIOS
fetch("/usuarios/qtdMusicas", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuario: Number(sessionStorage.ID_USUARIO)
    })
}).then(function (resposta) {
    console.log("ESTOU NO THEN DO qtdMusicas()!")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            sessionStorage.qtdMusicas = json[0].quantidade;

        });

    } else {

        resposta.text().then(texto => {
            console.error(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})


document.getElementById('artista_favorito').innerHTML = sessionStorage.ARTISTA_FAVORITO;
setTimeout(function () {
    document.getElementById('qtd_musicas').innerHTML = sessionStorage.qtdMusicas;
}, 100);



// GRAFICO ARTISTAS FAVORITOS DOS USUARIOS
fetch("/usuarios/viewArtistaFav", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        tabela: 'view_artistas_favoritos',
    })
}).then(function (resposta) {
    console.log("ESTOU NO THEN DO entrar()!")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            sessionStorage.MICHAEL = json.Michael;
            sessionStorage.MADONNA = json.Madonna;
            sessionStorage.FREDDIE = json.Freddie;
            sessionStorage.CAZUZA = json.Cazuza;
            sessionStorage.RITA = json.Rita;

            // Obtenha o contexto do elemento canvas onde o gráfico será renderizado
            var ctx = document.getElementById('meuGraficoDeBarras').getContext('2d');

            // Dados para o gráfico
            var dados = {
                labels: ['Michael Jackson', 'Madonna', 'Freddie Mercury', 'Cazuza', 'Rita Lee'],
                datasets: [{
                    label: 'Usuários',
                    data: [sessionStorage.MICHAEL, sessionStorage.MADONNA, sessionStorage.FREDDIE, sessionStorage.CAZUZA, sessionStorage.RITA],
                    backgroundColor: '#f74b6f'
                }],
                
            };

            // Configurações do gráfico
            var opcoes = {
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white',
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white',
                        }
                    } 
                }
            };

            // Criação do gráfico
            var meuGraficoDeBarras = new Chart(ctx, {
                type: 'bar',
                data: dados,
                options: opcoes
            });

        });

    } else {
        resposta.text().then(texto => {
            console.error(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})

console.log(sessionStorage.MICHAEL);
document.getElementById('nome_usuario').innerHTML = sessionStorage.NOME_USUARIO + '!';

function validarSessao(){
    console.log("foi");
    

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

        document.getElementById('nome_usuario').innerHTML = nome + '!';

        document.getElementById("div_btns").style.display = "none";
        document.getElementById("div_usuario").style.display = "flex";
        // document.getElementById("li_dash").style.display = "flex";

        let HTML = '<a href="./dashboard.html"> Dashboard </a>';
        document.getElementById("li_dash").innerHTML = HTML;



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


// KPI GENERO FAVORITO
var id = sessionStorage.ID_USUARIO;
fetch("/usuarios/genFavorito", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuario: id
    })
}).then(function (resposta) {
    console.log("ESTOU NO THEN DO entrar()!")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            sessionStorage.id = json.id;
            plotarGrafico(json);
            

        });

    } else {

        resposta.text().then(texto => {
            console.error(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})
function plotarGrafico(dados){
    let genero = dados.map(item => item.generoFavorito);
    document.getElementById('gen_favorito').innerHTML = genero;
}