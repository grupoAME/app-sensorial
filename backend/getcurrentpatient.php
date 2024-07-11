<?php
include("connect.php");
include("session.php");

$patient_id = getpatient_session()['data'];
$arr_return = [];

$sql = "SELECT id, name FROM patient  WHERE id = ".$patient_id;

$result = $mysqli->query($sql);

if($result){
    $arr_return['status'] = 'sucess';
    $arr_return['data'] = [];
        
    $row = $result -> fetch_assoc();    
    $arr_return['data']= $row;
    
}

echo json_encode($arr_return);

?>
