<?php
include("connect.php");

//todo
$professional_id = 1; //$_SESSION['prof_id']
$arr_return = [];
$arr_return['status'] = 'error';

$sql = "SELECT * FROM Patient  WHERE professional_id = ".$professional_id;

$result = $mysqli->query($sql);

if($result){
    $arr_return['status'] = 'sucess';
    $arr_return['data'] = [];
        
    while($row = $result -> fetch_assoc()){    
        array_push( $arr_return['data'], $row );
    }
}

echo json_encode($arr_return);   
