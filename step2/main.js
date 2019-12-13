function printChartFatturato(data) {

  var ctx = document.getElementById('fatturato').getContext('2d');
  new Chart(ctx, {
    type: data['type'],
    data: {
      labels: moment.months(),
      datasets: [{
        label: 'Fatturato',
        data: data['data'],
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

  var names = Object.keys(data['data']);
  var values = Object.values(data['data']);

  var ctx = document.getElementById('fatturato-by-agent').getContext('2d');
  new Chart(ctx, {
    type: data['type'],
    data: {
      labels: names,
      datasets: [{
        label: 'Fatturato by agent',
        data: values,
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

      printChartFatturato(data['fatturato']);

      printChartFatturatoByAgent(data['fatturato_by_agent']);

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
