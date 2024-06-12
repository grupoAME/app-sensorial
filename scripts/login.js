$("#bt-start").click(function(){
    if( $("#inp-email").val()!='' &&  $("#inp-password").val()!= '')
        login( $("#inp-email").val(), $("#inp-password").val() );
    else
        showAlert("Preencha corretamente os campus!");
});

function login(email,password, callback){
    $.post("backend/login.php", 
      {email:email, password:password},
      function(result){  
        console.log(result);
        result = JSON.parse(result);
        if(result.status == 'sucess')
            window.location = "list.html";
        else{
            //TODO
            showAlert("Dados inválidos! Verifique suas credenciais.");
        }
    }); 
  
  }

  function showAlert(msg){
    $("#alert-login").html(msg);
    $("#alert-login").show();
    
  }