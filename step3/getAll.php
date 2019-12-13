<?php

  header('Content-Type: application/json');

  include "data_step3.php";

  echo json_encode($graphs);
