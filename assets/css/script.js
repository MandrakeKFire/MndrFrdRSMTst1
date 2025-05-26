// Configuración del gráfico de habilidades
document.addEventListener('DOMContentLoaded', function() {
    // Actualizar año en el footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Configurar gráfico de habilidades
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Python', 'SQL', 'Data Analysis', 'Machine Learning', 'Data Visualization', 'Process Optimization'],
            datasets: [{
                label: 'Skill Level',
                data: [90, 85, 88, 75, 80, 85],
                backgroundColor: 'rgba(41, 128, 185, 0.2)',
                borderColor: 'rgba(41, 128, 185, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(41, 128, 185, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: { stepSize: 20 }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
});
