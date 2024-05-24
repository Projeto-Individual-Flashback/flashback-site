
            // Obter o contexto do canvas onde o gráfico será renderizado
            var ctx = document.getElementById('myChart').getContext('2d');
            
            // Criar um novo gráfico de linha
            var myChart = new Chart(ctx, {
                type: 'bar', // Tipo de gráfico
                data: {
                    labels: ['Michael Jackon', 'Whitney Houston', 'Freddie Mercury', 'Cazuza', 'Rita Lee', 'Lulu Santos'], // Labels do eixo x
                    datasets: [{
                        label: 'Usuários', // Legenda do conjunto de dados
                        data: [1, 3, 3, 2, 1, 5], // Dados do eixo y
                        backgroundColor: '#f4f4f4', // Cor de fundo
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true // Iniciar o eixo y no zero
                        }
                    }
                }
            });
            var pieCtx = document.getElementById('pieChart').getContext('2d');
        var pieChart = new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Internacionais', 'Nacionais'],
                datasets: [{
                    label: 'Votes',
                    data: [12, 19],
                    backgroundColor: [
                    '#f74b6f',
                    '#a02ff2',
                    ],
                }]
            }
        });