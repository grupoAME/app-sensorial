<?php
include("connect.php");

$email = $_POST["email"];
$number = $_POST["number"];
$patient = $_POST["patient"];
$quest_value = $_POST["quest_value"];

$sql = "SELECT id FROM question WHERE email= '$email' AND patiente = '$patient' AND number = '$number' AND  date = CURDATE() ";

$result = $mysqli->query($sql);
$row = $result -> fetch_assoc();
if( $row == null)
    $sql = "INSERT INTO question VALUES(null, '$email', '$patient', '$number', '$quest_value',CURDATE()) ";  
else 
    $sql = "UPDATE question SET value = '$quest_value' WHERE id = ".$row['id'];

$result = $mysqli->query($sql);
if($result){
    $arr_return['status'] = 'sucess';
}  
else 
    $arr_return['status'] = 'error';

echo json_encode($arr_return);   



?>