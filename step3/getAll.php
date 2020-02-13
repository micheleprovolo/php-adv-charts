<?php

  header('Content-Type: application/json');

  include "data_step3.php";

  //salvo in variabile il valore che viene inserito nell'url
  $level = $_GET['level'];

  $res = [];

  //ciclo per ottenere i singoli grafici
  foreach ($graphs as $name => $graph) {

    //salvo in una variabile il valore di access, cioè il livello del grafico
    $gLevel = $graph['access'];

    //se il grafico che ho in mano è di livello guest, posso pusharlo tranquillamente
    if ($gLevel == 'guest') {

    //prendo la key $name e la pusho dentro per ogni elemento
      $res[$name] = $graph;
    }
    //lo stesso se il grafico è di livello clevel e il valore inserito dall'utente è clevel
    if ($gLevel == 'clevel' && $level == 'clevel') {

      //prendo la key $name e la pusho dentro per ogni elemento
      $res[$name] = $graph;
    }
    //se il grafico è di livello employee, devo verificare che il valore inserito dall'utente
    //sia employee oppure clevel (entrambi possono accedervi)
    if ($gLevel == 'employee'
        && ($level == 'employee' || $level == 'clevel')) {
          
        //prendo la key $name e la pusho dentro per ogni elemento
        $res[$name] = $graph;
    }
  }
  

  echo json_encode($res);
