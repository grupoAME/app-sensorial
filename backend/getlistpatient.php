<?php
include("connect.php");
include("session.php");

//todo
$professional_id = getuser_session()['data'];
$arr_return = [];
$arr_return['status'] = 'error';

$sql = "SELECT * FROM patient  WHERE professional_id = ".$professional_id;

$result = $mysqli->query($sql);

if($result){
    $arr_return['status'] = 'sucess';
    $arr_return['data'] = [];
        
    while($row = $result -> fetch_assoc()){    
        array_push( $arr_return['data'], $row );
    }
}

echo json_encode($arr_return);   
