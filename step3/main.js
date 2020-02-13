
function printChartFatturato(graph) {

  var ctx = document.getElementById('fatturato').getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: moment.months(),
      datasets: [{
        label: 'Fatturato',
        data: graph['data'],
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

function printChartFatturatoByAgent(graph) {

  var names = Object.keys(graph['data']);
  var values = Object.values(graph['data']);

  var ctx = document.getElementById('fatturato-by-agent').getContext("2d");
  new Chart(ctx, {
    type: 'pie',
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

function printChartTeamEfficiency(graph) {

  var datasets = [];
  var names = Object.keys(graph['data']);
  var values = Object.values(graph['data']);

  for (i=0;i<names.length;i++) {

    datasets.push({
      label: names[i],
      
      data: values[i]
    });
  }

  var ctx = $('#team_efficiency');
  new Chart(ctx, {

    type: 'line',
    data: {

      labels: moment.months(),
      datasets: datasets
    }
  });
}

function printGraphs(graphs) {

  if (graphs['fatturato']) {

    printChartFatturato(graphs['fatturato']);
  }
  if (graphs['fatturato_by_agent']) {

    printChartFatturatoByAgent(graphs['fatturato_by_agent']);
  }
  if (graphs['team_efficiency']) {

    printChartTeamEfficiency(graphs['team_efficiency']);
  }
}

function getLevelParameter() {

  //oggetto che permette di gestire i paremetri negli url in modo autonomo
  var urlParams = new URLSearchParams(window.location.search);
  var levelParam = urlParams.get('level');

  return levelParam;
}

function getData() {

  var level = getLevelParameter();
  // console.log(level);
  
  $.ajax({

    url: "getAll.php",
    method: "GET",
    data: {
      level: level
    },
    success: function(data) {

      console.log("data", data);
      printGraphs(data);
    },
    error: function(err) {

      console.log("err", err);
    }
  });
}

function init() {
  getData();
}

$(document).ready(init);
