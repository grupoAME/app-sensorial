getListPatient( 
    
    function(data){
    $("#container-list-user").html("");
    data.forEach(element => {
        //console.log(element)
        var elem = '<div class="container-graph"><div class="patient-name"><i class="fa fa-chevron-circle-down ml-5" aria-hidden="true"></i> '+element.name+' </div>';
        elem += '<div class="container-line-graph"><div class="line-graph"></div><div class="line-graph"></div><div class="line-graph"></div><div class="line-graph"></div></div><div id="graph-patient-'+element.id+'"></div>';
        
        $("#container-list-user").append(elem);
        getResult(element.id)
    });

    $(".item-list-user").click(function(){
        window.location = "view.html?id="+$(this).attr("ref");
    });

});  