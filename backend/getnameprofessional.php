<?php
include("connect.php");
include("session.php");

//todo
$professional_id = getuser_session()['data'];
$arr_return = [];
$arr_return['status'] = 'error';

$sql = "SELECT name FROM professional  WHERE id = ".$professional_id;

$result = $mysqli->query($sql);

if($result){
    $arr_return['status'] = 'sucess';
    $arr_return['data'] = $result -> fetch_assoc();
        
}

echo json_encode($arr_return);   


