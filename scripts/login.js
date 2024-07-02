$("#bt-start").click(function(){
    if( $("#inp-email").val()!='' &&  $("#inp-password").val()!= '')
        login( $("#inp-email").val(), $("#inp-password").val() );
    else
        showAlert("Preencha corretamente os campus!");
});


$("#bt-register").click(function(){
    window.location = "register.html";
});

//has session?
getUserSession(redirectToList, function(){});

function login(email,password, callback){
    $.post("backend/login.php", 
      {email:email, password:password},
      function(result){  
        //console.log(result);
        result = JSON.parse(result);
        if(result.status == 'sucess'){
            setUserSession(result.data, redirectToList);
        }else{
            //TODO
            showAlert("Dados inválidos! Verifique suas credenciais.");
        }
    }); 
  
  }

  function showAlert(msg){
    $("#alert-login").html(msg);
    $("#alert-login").show();
    
  }

  function redirectToList(){
    window.location = "list.html";
  }