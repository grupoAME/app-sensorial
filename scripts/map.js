
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
    console.log('ok');

    var bars = "";
    data.forEach(element => {
        var progress = parseInt( element['progress'] );
        bars+='<div class="container-bar-graph"><div style="margin-top:'+(100-progress)+'px; height: '+progress+'px;" class="bar-graph">'+element['progress']+'%';
        bars+='</div><span class="bar-graph-date">'+element['date']+'</span></div>';
    });

    $("#graph-patient-"+patient).html(bars);
   
}

getListPatient( function(data){
    $("#container-list-user").html("");
    data.forEach(element => {
        console.log(element)
        var elem = '<div class="container-graph"><div class="patient-name"><i class="fa fa-chevron-circle-down ml-5" aria-hidden="true"></i> '+element.name+' </div>';
        elem += '<div class="container-line-graph"><div class="line-graph"></div><div class="line-graph"></div><div class="line-graph"></div><div class="line-graph"></div></div><div id="graph-patient-'+element.id+'"></div>';
        
        $("#container-list-user").append(elem);
        getResult(element.id)
    });

    $(".item-list-user").click(function(){
        window.location = "view.html?id="+$(this).attr("ref");
    });

});  





