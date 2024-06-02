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

// Obtém o contexto do canvas onde o gráfico será desenhado
var ctx2 = document.getElementById('myPieChart').getContext('2d');

// Cria um novo gráfico de pizza
var myPieChart = new Chart(ctx2, {
    type: 'pie', // Tipo do gráfico
    data: {
        labels: ['Musica 1', 'Musica 2', 'Musica 3'], // Etiquetas das partes da pizza
        datasets: [{
            label: 'Dataset 1', // Etiqueta do conjunto de dados
            data: [12, 19, 3], // Dados do gráfico
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
console.log(sessionStorage.NOME_USUARIO);
console.log(sessionStorage.ARTISTA_FAVORITO);
console.log(sessionStorage.GENERO_FAVORITO);


document.getElementById('artista_favorito').innerHTML = sessionStorage.ARTISTA_FAVORITO;

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