$("#bt-register").click(function(){
  if($("#inp-name").val() == "" || $("#inp-email").val() == "" || $("#inp-email2").val() == "" ||
  $("#inp-phone").val() == "" || $("#inp-area").val() == "" || $("#inp-city").val() == "" || 
  $("#inp-state").val() == "" || $("#inp-password").val()== ""){
    showAlert("Preencha os campus corretamente.");
  }else if( $("#inp-email").val() != $("#inp-email2").val())
    showAlert("Os e-mails não coincidem!");
  else
    register(
      $("#inp-name").val(),
      $("#inp-email").val(),
      $("#inp-phone").val(),
      $("#inp-area").val(),
      $("#inp-city").val(),
      $("#inp-state").val(),
      $("#inp-password").val()
    );
});

function register(nome, email,phone,password, area, city, state, callback){
  $.post("backend/register.php", 
    {nome:nome, email:email, password:password, phone:phone, area:area, city:city, state:state},
    function(result){  
      console.log(result);
      result = JSON.parse(result);
      if(result.status == 'sucess')
          window.location = "list.html";
      if(result.status == 'already-rec'){
        showAlert("Você já possui cadastro!");
      } else{
          //TODO
          showAlert("Não foi possível realizar seu registro.");
      }
  }); 

}


function showAlert(msg){
  $("#alert-register").html(msg);
  $("#alert-register").show();
  
}