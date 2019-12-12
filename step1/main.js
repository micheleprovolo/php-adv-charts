function printChart(data) {

  var ctx = document.getElementById('canvas').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: moment.months(),
      datasets: [{
        label: 'Vendite',
        data: data,
        backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
        borderColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
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
      printChart(data);
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
