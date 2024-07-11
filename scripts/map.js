function getResult(patient){
    $.post("backend/getprogress.php", 
        {patient:patient},
        function(result){  
          console.log(result);
          result = JSON.parse(result);
          if(result.status == 'sucess'){
                showDataProgress(result.data, patient);
          } 
      }); 
}


function showDataProgress(data, patient){
   
    var bars = "";
    data.forEach(element => {
        var progress = parseInt( element['progress'] );
        bars+='<div class="container-bar-graph"><div style="margin-top:'+(100-progress)+'px; height: '+progress+'px;" class="bar-graph">'+element['progress']+'%';
        bars+='</div><span class="bar-graph-date">'+element['date']+'</span></div>';
    });

    $("#graph-patient-"+patient).html(bars);
   
}







