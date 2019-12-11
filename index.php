<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>PHP1</title>
    <!-- FONT: LATO -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <!-- FONT: FONTAWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <!-- JS: JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- JS: MOMENT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>

    <!-- JS: CHART-JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js"></script>

    <!-- JS: HANDLEBARS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.0/handlebars.min.js" charset="utf-8"></script>

<!-- Stampare a schermo una decina di dischi musicali
(vedi screenshot) in due modi diversi:
- Solo con l'utilizzo di PHP, che stampa
direttamente i dischi in pagina: al caricamento
della pagina ci saranno tutti i dischi.
- Attraverso l'utilizzo di AJAX: al caricamento
della pagina ajax chiederà attraverso una
chiamata i dischi a php e li stamperà
attraverso handlebars.
Utilizzare: Html, Sass, JS, jQuery, handlebars, Php
Opzionale:
- Attraverso un'altra chiamata ajax, filtrare gli
album per artista -->

  <?php
    include "data.php";
    // include "helper.php";
  ?>

    <!-- CSS: MY STYLE -->
    <link rel="stylesheet" href="style.css">

    <!-- JS: MY SCRIPT -->
    <script src="main.js" charset="utf-8"></script>
  </head>
  <body>

    <div>

    <?php

      foreach ($database as $record) { ?>

        <h1> <?php echo $record['title'] ?> </h1>
        <h2> <?php echo $record['author'] ?> </h2>
        <h3> <?php echo $record['year'] ?> </h3>
        <img src="<?php echo $record['poster'] ?>">

      <?php }

     ?>

  </div>
  </body>
</html>
