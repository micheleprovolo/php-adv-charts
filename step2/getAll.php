<?php

  header('Content-Type: application/json');

  include "data_step2.php";

  echo json_encode($graphs);
