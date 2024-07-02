
function setUserSession(user, callback){
    console.log(user)
    $.post("backend/session.php", 
        {user:user, function: "setuser"},
        function(result){
            console.log(result)
            result = JSON.parse(result);
            if(result.status == 'sucess'){
                callback();
            }
        });
  }

  function getUserSession(callback, callback2){
    $.post("backend/session.php", 
        {function: "getuser"},
        function(result){
            console.log(result)
            result = JSON.parse(result);
            if( (result.status == 'sucess') &&  (result.data != null) && (result.data != "")) {
                console.log(result)
                callback();
            }else{
                callback2();
            }
        });
  }

  function setPatientSession(patient, callback){
    console.log(patient)
    $.post("backend/session.php", 
        {patient:patient, function: "setpatient"},
        function(result){
            console.log(result)
            result = JSON.parse(result);
            
            if(result.status == 'sucess'){
                callback();
            }
        });
  }

  function getPatientSession(callback, callback2){
    $.post("backend/session.php", 
        {function: "getpatient"},
        function(result){
            console.log(result)
            result = JSON.parse(result);
            if( (result.status == 'sucess') &&  (result.data != null) && (result.data != "")) {
                console.log("ok")
                callback();
            }else{
                callback2();
            }
        });
  }


  function singOut(callback){
    $.post("backend/session.php", 
        {function: "getout"},
        function(result){
            console.log(result)
            result = JSON.parse(result);
            if( (result.status == 'sucess') ) {
                console.log("ok")
                callback();
            }
        });
  }