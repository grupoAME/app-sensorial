getCurrentPatient( 
    
    function(data){
    $("#container-list-user").html("");
    console.log(data)
    //console.log(element)
    var elem = '<div class="container-graph"><div class="patient-name"><i class="fa fa-chevron-circle-down ml-5" aria-hidden="true"></i> '+data.name+' </div>';
    elem += '<div class="container-line-graph"><div class="line-graph"></div><div class="line-graph"></div><div class="line-graph"></div><div class="line-graph"></div></div><div id="graph-patient-'+data.id+'"></div>';
    
    $("#container-list-user").append(elem);
    getResult(data.id)
   

    $(".item-list-user").click(function(){
        window.location = "view.html?id="+$(this).attr("ref");
    });

});  

$("#bt-back").click(function(){
    window.location = "list.html";
});