<?php
include("connect.php");
include("session.php");

$nome  = $_POST["nome"];
$bday = $_POST["bday"];
//todo
$professional_id = getuser_session()['data'];

$sql = "SELECT id FROM patient WHERE name='$nome' and bday= '$bday' ";

$result = $mysqli->query($sql);
$row = $result -> fetch_assoc();
if( $row == null){
    $sql = "INSERT INTO patient VALUES(null, '$nome', '$bday', '$professional_id') ";  

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