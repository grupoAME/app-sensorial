<?php 

if(session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

free_session();

echo json_encode( getpatient_session() );

if( isset( $_POST['function'])){
    if($_POST['function'] == "setuser")
        echo  $_SESSION['patient'](setuser_session($_POST['user']));
    else if($_POST['function'] == "getuser")
        echo json_encode(getuser_session());
    else if($_POST['function'] == "setpatient")
        echo json_encode(setpatient_session($_POST['patient']));
    else if($_POST['function'] == "getpatient")
        echo json_encode(getpatient_session());
}
  

if( !isset( $_SESSION['patient']))
    $_SESSION['patient'] = "";


//set data via post
if( isset($_POST['free']) ) {
    free_session();
}

function setuser_session($user){
    $arr_return = [];
    $_SESSION['user'] = $user;
    $arr_return['status'] = 'sucess';
    $arr_return['data'] = $_SESSION['user'];
    return $arr_return;
}

function setpatient_session($patient){
    $_SESSION['patient'] = $patient;
    $arr_return = [];
    $arr_return['status'] = 'sucess';
    $arr_return['data'] = $_SESSION['user'];
    return $arr_return;
}


//get

function getuser_session(){
    $arr_return = [];
    $arr_return['status'] = 'sucess';
    $arr_return['data'] = $_SESSION['user'];
    return $arr_return;
}

function getpatient_session(){
    $arr_return = [];
    $arr_return['status'] = 'sucess';
    $arr_return['data'] = $_SESSION['patient'];
    return $arr_return;
}

/** Function to set/get data */
function free_session(){
    session_unset();
}
