$("#bt-register").click(function(){
if($("#inp-name").val() == "" || $("#inp-email").val() == "" || $("#inp-email2").val() == "" ||
$("#inp-phone").val() == "" || $("#inp-area").val() == "" || $("#inp-city").val() == "" || 
$("#inp-state").val() == "" || $("#inp-password").val()== ""){
    showAlert("Preencha os campus corretamente.");
}else
    register_patient(
        $("#inp-name").val(),
        $("#inp-data").val()
    );
});



function showAlert(msg){
    $("#alert-login").html(msg);
    $("#alert-login").show();  
}



function showListPatient(){

    getListPatient( function(data){
        $("#container-list-user").html("");
        data.forEach(element => {
            console.log(element)
            var elem = '<div ref="'+element.id+'" class="item-list-user w-full h-10 bg-blue-900 text-white py-2 px-2 rounded-lg mt-5  hover:cursor-pointer hover:bg-blue-500">';
             elem += '<i class="fa fa-user ml-2 mr-2" aria-hidden="true"></i>';
            elem += '<span class="">'+element.name+'</span><i class="fa fa-calendar ml-2 mr-2" aria-hidden="true"></i>';
            elem += '</span>'+element.bday+' </span> </div>';
            $("#container-list-user").append(elem);
        });

        $(".item-list-user").click(function(){
            window.location = "view.html?id="+$(this).attr("ref");
        });

    });   
};

function register_patient(nome, bday){
    $.post("backend/register_patient.php", 
        {nome:nome, bday:bday},
        function(result){  
          console.log(result);
          result = JSON.parse(result);
          if(result.status == 'sucess')
                showListPatient();
          if(result.status == 'already-rec'){
            showAlert("Esse paciente já possui cadastro!");
          } else{
              //TODO
              showAlert("Não foi possível realizar o registro.");
          }
      }); 
}


showListPatient();

