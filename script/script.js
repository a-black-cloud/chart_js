/********************** 
CHART STUFF 
*********************
//https://www.youtube.com/watch?v=sE08f4iuOhA
*/


var myChart = document.getElementById('myChart').getContext('2d');

var massPopChart = new Chart(myChart, {

    type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [{
            label: 'Population',
            data: [
            1115,
            1120,
            1145,
            1565,
            1170,
            1800
          ],
            backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Height Chart',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }


    }

})
