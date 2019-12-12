function printChartFatturato(data) {

  var ctx = document.getElementById('fatturato').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: moment.months(),
      datasets: [{
        label: 'Fatturato',
        data: data.fatturato.data,
        backgroundColor: [
                'green'
            ],
        borderColor: [
                'lightgreen'
            ],
      }]
    }
  });
}

function printChartFatturatoByAgent(data) {

  var ctx = document.getElementById('fatturato-by-agent').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(data.fatturato_by_agent.data),
      datasets: [{
        label: 'Fatturato by agent',
        data: Object.values(data.fatturato_by_agent.data),
        backgroundColor: [
                'red',
                'blue',
                'green',
                'orange'
            ],
        borderColor: [
                'grey'
            ],
            borderWidth: 1
      }]
    }
  });
}

function getData() {

  $.ajax({

    url: "getAll.php",
    method: "GET",
    success: function(data) {
      console.log("data", data);

      printChartFatturato(data);

      printChartFatturatoByAgent(data);

    },
    error: function(error) {
      console.log("error", error);
    }
  });
}

function init() {
  getData();
}

$(document).ready(init);
