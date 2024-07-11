<?php

$mysqli = new mysqli("localhost","root","root","sensorial_db");
//$mysqli = new mysqli("localhost","peefon23_root","fugpy8-degxUp-hubfur","peefon23_sensorial3d");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}