// Obtenha o contexto do elemento canvas onde o gráfico será renderizado
var ctx = document.getElementById('meuGraficoDeBarras').getContext('2d');

// Dados para o gráfico
var dados = {
    labels: ['Michael Jackson', 'Madonna', 'Freddie Mercury', 'Cazuza', 'Rita Lee'],
    datasets: [{
        label: 'Usuários',
        data: [120, 150, 180, 70, 200],
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