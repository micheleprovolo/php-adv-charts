
function printData(data) {

  var target = $("#container");
  var template = $("#record-template").html();
  var compiled = Handlebars.compile(template);

  for (var i = 0; i < data.length; i++) {
  var record = data[i];

  var compiledRecord = compiled(record);
  target.append(compiledRecord);
  }
}

function getData() {

  $.ajax({
    url: "getAllRecord.php",
    method: "GET",
    success: function(data) {
      console.log("data", data);
      printData(data);
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
