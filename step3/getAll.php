<?php

  header('Content-Type: application/json');

  include "data_step3.php";

  //salvo in variabile il valore che viene inserito nell'url
  $access = $_GET['access'];

  $res = [];

  if ($access == $graphs['fatturato']['access']) {
    $res[] = $graphs['fatturato'];

  } else if ($access == $graphs['fatturato_by_agent']['access']) {
    $res[] = $graphs['fatturato_by_agent'], $graphs['fatturato'];

  } else if ($access == $graphs['team_efficiency']['access']) {
    $res[] = $graphs['fatturato_by_agent'], $graphs['fatturato'], $graphs['team_efficiency'];
  }

  echo json_encode($res);
