<?php
include("connect.php");

$nome  = $_POST["nome"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$area = $_POST["area"];
$city = $_POST["city"];
$state = $_POST["state"];
$password = $_POST["password"];

$sql = "SELECT id FROM professional WHERE email= '$email' ";

$result = $mysqli->query($sql);
$row = $result -> fetch_assoc();
if( $row == null){
    $sql = "INSERT INTO professional VALUES(null, '$nome', '$email', '$phone', '$area', '$city', '$state','$password') ";  

    $result = $mysqli->query($sql);
    if($result)
        $arr_return['status'] = 'sucess';
    else 
        $arr_return['status'] = 'error';
}else{
    $arr_return['status'] = 'already-rec';
}


echo json_encode($arr_return);   



?>