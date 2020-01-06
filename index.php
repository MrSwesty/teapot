<?php
// DB Credentials
// define('DB_HOST', 'localhost');
// define('DB_USER', 'root');
// define('DB_NAME', 'contact');
// define('DB_PASS', 'root');


if(isset($_POST["submit"])) {

  echo "<pre>";

  print_r($_POST);

$name = $_POST["name"];
$mobile = $_POST["mobile"];
$email = $_POST["email"];

echo $name . $mobile .$email;

}
