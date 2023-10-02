      const ctx = document.getElementById('myChart')

      new Chart(ctx, {
       // type: 'bar',
        type: 'doughnut',
        data:{
          //labels : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          labels:['Eating out', 'Entertainment', 'General'],
          datasets:[{
            //label: '# of votes',
            label: 'Amount Spent',
            //data: [12,8,3,5,2,23],
            data: [100,200,260],
            borderWidth: 1
          }]
        },
        options : {
          scales: {
            y : {
              beginAtZero: true
            }
          }
        }
      });