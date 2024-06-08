function sendQuestion(email,patient,number, quest_value, callback){
  $.post("backend/sendquestion.php", 
    {email:email, patient:patient,number:number, quest_value:quest_value},
    function(result){  
      console.log(result);
      result = JSON.parse(result);
      if(result.status == 'sucess')
         callback(result.data);
      else{
          //TODO
          console.log(result);
      }
  }); 

}

function singIn(name, email, phone, password){
    $.post("backend/singin.php", 
    {name:name, email:email,phone:phone,password:password },
    function(result){  
      result = JSON.parse(result);
      if(result.status == 'sucess')
         callback(result.data);
      else{
          //TODO
          console.log(result);
      }
  }); 
}

function login(email, password){
    $.post("backend/singin.php", 
    {email:email, password:password },
    function(result){  
      result = JSON.parse(result);
      if(result.status == 'sucess')
         callback(result.data);
      else{
          //TODO
          console.log(result);
      }
  }); 
}

function getpatient(email){
    $.post("backend/singin.php", 
    {email:email},
    function(result){  
      result = JSON.parse(result);
      if(result.status == 'sucess')
         callback(result.data);
      else{
          //TODO
          console.log(result);
      }
  }); 
}