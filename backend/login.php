<?php
include("connect.php");

$email = $_POST["email"];
$password = $_POST["password"];

$sql = "SELECT id FROM professional WHERE email= '$email' AND password = '$password' ";

$result = $mysqli->query($sql);
$row = $result -> fetch_assoc();

if($row != null){
    $arr_return['status'] = 'sucess';
    $arr_return['data'] = $row['id'];
}  
else 
    $arr_return['status'] = 'error';

echo json_encode($arr_return);   


?>