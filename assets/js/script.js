const ctx = document.getElementById('skillsChart').getContext('2d');

const skillsChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Python', 'SQL', 'Azure', 'Databricks', 'Data Analysis', 'Machine Learning', 'Data Visualization'],
    datasets: [{
      label: 'Skill Level',
      data: [9, 8, 7, 7, 9, 8, 8],
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
      borderColor: '#007bff',
      pointBackgroundColor: '#007bff',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 10
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});
