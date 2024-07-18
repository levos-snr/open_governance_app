 document.addEventListener('DOMContentLoaded', function () {
  const badgetsURL = "http://localhost:3000/budget";
  
  //get all budgets from the database
  async function getBudgets() {
          const response = await fetch(badgetsURL, {
                  method: 'GET',
                  headers: {
                          'Content-Type': 'application/json',
                  }
          });
          
          if (response.ok) {
                  return response.json();
          } else {
                  throw new Error('Failed to fetch budgets');
          }
  }
  
  // put all the amount in array using getBudgets function
         getBudgets().then(data => {
                 let labels = [];
                 let dataAmount = [];
                 let backgroundColor = [];
                 let borderColor = [];
                 let hoverBackgroundColor = [];
                 let hoverBorderColor = [];
                 let total = 0;
                 for (let i = 0; i < data.length; i++) {
                         labels.push(data[i].id);
                         dataAmount.push(data[i].amount);
                         total += data[i].amount;
                 }
                 // create a chart
                 const ctx = document.getElementById('myChart').getContext('2d');

                 const myChart = new Chart(ctx, {
                         type: 'polarArea',
                         data: {
                                 labels: labels,
                                 datasets: [{
                                         label: 'Budgets',
                                         data: dataAmount,
                                 }]
                         },
                         options: {
                                 responsive: true,
                         }
         });       
        });

  getBudgets()
 });