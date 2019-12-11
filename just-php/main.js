
// function printRandElem(elements) {
//
//   var indRnd = Math.floor(Math.random() * elements.lenght);
//
//   var elemRnd = elements[indRnd];
//
//   var target = $("#container");
//   var template = $("#ad-template").html();
//   var compiled = Handlebars.compile(template);
//
//   var compiledAd = compiled(elemRnd);
//   target.append(compiledAd);
//
// }
//
// function getData() {
//
//   $.ajax({
//     url: "getAllAds.php",
//     method: "GET",
//     success: function(data) {
//         printRandElem(data);
//     },
//     error: function(error) {
//       console.log("error", error);
//     }
//   });
// }
// function init() {
//   getData();
// }
// $(document).ready(init);
