document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de Barras
    var barData = [{
        x: ['A', 'B', 'C', 'D', 'E'],
        y: [20, 14, 23, 25, 22],
        type: 'bar'
    }];

    var barLayout = {
        title: 'Gráfico de Barras',
        xaxis: {
            title: 'Categorias'
        },
        yaxis: {
            title: 'Valores'
        }
    };

    Plotly.newPlot('bar-chart', barData, barLayout);

    // Gráfico de Linhas
    var lineData = [{
        x: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05'],
        y: [10, 15, 13, 17, 14],
        type: 'scatter',
        mode: 'lines+markers'
    }];

    var lineLayout = {
        title: 'Gráfico de Linhas',
        xaxis: {
            title: 'Mês'
        },
        yaxis: {
            title: 'Valores'
        }
    };

    Plotly.newPlot('line-chart', lineData, lineLayout);
});
