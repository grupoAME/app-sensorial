<?php
include("connect.php");
include("session.php");

$patient = $_POST["patient"];

//todo
$professional_id = 1;
$arr_return = [];
$arr_return['status'] = 'error';

$sql = "SELECT number, value FROM template ORDER BY number";
$result = $mysqli->query($sql);
$array_tamplete = [];
while($row = $result -> fetch_assoc()){
    $array_tamplete[$row['number']]= $row['value'];
}


$sql = "SELECT DISTINCT date FROM question WHERE patient_id = $patient;";
$result = $mysqli->query($sql);
$array_date = [];
while($row = $result -> fetch_assoc()){
    array_push( $array_date,  $row['date']);
}


$arr_result = [];
foreach ($array_date as &$date) {
    $sql = "SELECT number, value FROM question WHERE date = '$date' AND patient_id = $patient ORDER BY number";
    $result = $mysqli->query($sql);
    $qtd_correct = 0;
    while($row = $result -> fetch_assoc()){

        if($row['value'] == $array_tamplete[ intval($row['number']) ])
            $qtd_correct++;

    } 
    $local_result = [];
    $local_result['date'] = $date;
    $local_result['progress'] = ($qtd_correct*100)/10;
    array_push( $arr_result, $local_result);   
}
$arr_return['status'] = 'sucess';
$arr_return['data'] = $arr_result;
echo json_encode($arr_return);   



?>