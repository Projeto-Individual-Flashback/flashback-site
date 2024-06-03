




// Obtém o contexto do canvas onde o gráfico será desenhado
var ctx2 = document.getElementById('myPieChart').getContext('2d');

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
    console.log("ESTOU NO THEN DO entrar()!")

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
                            position: 'top', // Posição da legenda
                        },
                        tooltip: {
                            enabled: true // Habilitar tooltips
                        }
                    }
                }
            });

        });

    } else {

        console.log("Houve um erro ao tentar realizar o login!");
        alert('Email ou senha inválidos!')

        resposta.text().then(texto => {
            console.error(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})

fetch("/usuarios/qtdMusicas", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuario: Number(sessionStorage.ID_USUARIO)
    })
}).then(function (resposta) {
    console.log("ESTOU NO THEN DO entrar()!")

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
                    backgroundColor: '#f74b6f',
                }]
            };

            // Configurações do gráfico
            var opcoes = {
                scales: {
                    y: {
                        beginAtZero: true
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

        console.log("Houve um erro ao tentar realizar o login!");
        alert('Email ou senha inválidos!')

        resposta.text().then(texto => {
            console.error(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})

console.log(sessionStorage.MICHAEL);