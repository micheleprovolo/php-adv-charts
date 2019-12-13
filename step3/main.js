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

function printChartTeamEfficiency(data) {

  var value1 = Object.values(data['data']['Team1']);
  var value2 = Object.values(data['data']['Team2']);
  var value3 = Object.values(data['data']['Team3']);

  var ctx = document.getElementById('team_efficiency').getContext('2d');
  new Chart(ctx, {
    type: data['type'],
    data: {
      labels: moment.months(),
      datasets: [{
        label: "Team1",
        data: value1,
        borderColor: [
          'blue'
      ]
      }, {
        label: "Team2",
        data: value2,
        borderColor: [
          'red'
      ]
      
      }, {
        label: "Team3",
        data: value3,
        borderColor: [
          'green'
      ]
      }
    ]
    }
  });
}

function getData(access) {

  $.ajax({

    url: "getAll.php",
    method: "GET",

    data: {
      access: access
    },

    success: function(data) {
      console.log("data", data);

      if () {
        printChartFatturato(data['fatturato']);

      } else if () {
        printChartFatturato(data['fatturato']);
        printChartFatturatoByAgent(data['fatturato_by_agent']);

      } else if () {
        printChartFatturato(data['fatturato']);
        printChartFatturatoByAgent(data['fatturato_by_agent']);
        printChartTeamEfficiency(data['team_efficiency']);
      }

      

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
