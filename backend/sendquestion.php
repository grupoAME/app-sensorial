<?php
include("connect.php");

$number = $_POST["number"];
$patient = $_POST["patient"];
$quest_value = $_POST["quest_value"];
//todo
$professional_id = 1;

$sql = "SELECT id FROM question WHERE professional_id= '$professional_id' AND patient_id = '$patient' AND number = '$number' AND  date = CURDATE() ";

$result = $mysqli->query($sql);
$row = $result -> fetch_assoc();
if( $row == null)
    $sql = "INSERT INTO question VALUES(null, '$professional_id', '$patient', '$number', '$quest_value',CURDATE()) ";  
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