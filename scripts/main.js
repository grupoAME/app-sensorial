$("#bt-start").click(function(){
 window.location = "view.html";
});

actual_quest = 1;
modal_active = false;
questions_json = null;
is_full = false;
patient = 1;
user = "luisaraujo.ifba@gmail.com";
activenav();
orientationcheck();

$("#btn-next").click(function(){
    if(modal_active)
        return

    if(actual_quest < 10)
        actual_quest++;

    $("#main-image").attr("src", "images/imagem"+actual_quest+".png");
    update_question();
    activenav();
});

$("#btn-back").click(function(){
    if(modal_active)
        return;

    if(actual_quest > 1)
        actual_quest--;

    $("#main-image").attr("src", "images/imagem"+actual_quest+".png");
    update_question();
    activenav();
});

$(".btn-nav-img").click(function(){

    if(modal_active)
        return;

    actual_quest = $(this).attr("ref");

    $("#main-image").attr("src", "images/imagem"+actual_quest+".png");
    update_question();
    activenav();
});



$("#view-question").click(function(){
  
    if(!modal_active){
        showModalQuestion();
    }
});

function showModalQuestion(){
    $("#modal-question").show();
    modal_active = true;
    if(questions_json[actual_quest].opt != undefined){
        $("#inp-alt-"+questions_json[actual_quest].opt).prop("checked", true); 
    }
}

$("#btn-confirm-question").click(function(){
    
    $("#modal-question").hide();
    modal_active = false;
    var quest_value = $("input[name='inp_quest']:checked").val();
    if(quest_value != undefined)
        sendQuestion(user,patient,actual_quest, quest_value, function(){
            questions_json[actual_quest].opt = quest_value;
        } );
});

$("#main-image").dblclick(function(){
    if(!is_full){
        is_full = true;
        $("#main-image").addClass("full-image");
        $("#container-image").addClass("full-image");
    }else{
        is_full = false;
        $("#main-image").removeClass("full-image");
        $("#container-image").removeClass("full-image");
    }
});

function update_question(){
    $("#text-question").html(questions_json[actual_quest-1].quest);
    $("#text-alt-1").html(questions_json[actual_quest-1].alt[0]);
    $("#text-alt-2").html(questions_json[actual_quest-1].alt[1]);
    $("#text-alt-3").html(questions_json[actual_quest-1].alt[2]);
    $("input").prop( "checked", false );
};

function activenav(){
    $(".btn-nav-img").removeClass('active');
    $(".btn-nav-img[ref='"+actual_quest+"']").addClass('active')
}

fetch('data/questions.json')
    .then((response) => response.json())
    .then((json) => function(){
        questions_json = json;
        update_question();
    }() )

$(window).on( "orientationchange", function( event ) {
    orientationcheck()
});

function orientationcheck(){
if(screen.availHeight > screen.availWidth){
    is_full = true;
    $("#main-image").addClass("full-image");
    $("#container-image").addClass("full-image");
}else{
    is_full = false;
    $("#main-image").removeClass("full-image");
    $("#container-image").removeClass("full-image");
}}

    