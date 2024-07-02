
actual_quest = 1;
next_freequestion = 1;
modal_active = false;
questions_json = null;
is_full = false;


user = "luisaraujo.ifba@gmail.com";

orientationcheck();


$("#btn-next").click(function(){
  nextQuestion();
});

$("#tap-right").click(function(){
    nextQuestion();
});

$("#btn-back").click(function(){
    priorQuestion();
});

$("#tap-left").click(function(){
    priorQuestion();
});

$("#bt-back").click(function(){
    redirectToList();
})

$(".btn-nav-img").click(function(){

    if(modal_active)
        return;

    actual_quest = $(this).attr("ref");
    atQuestion();
   /*
   $("#main-image").attr("src", "images/imagem"+actual_quest+".png");
    update_question();
    activenav();
    */
});

$("#main-image").on("load",  function(){
   $("#load-image").hide();
});

$("#view-question").click(function(){
    $("#view-question").removeClass("view-question-error");
    if(!modal_active){
        showModalQuestion();
    }
});

function showModalQuestion(){
    update_question();
    $("#modal-question").show();
    modal_active = true;
    if(questions_json[actual_quest-1].opt != undefined){
        $("#inp-alt-"+questions_json[actual_quest-1].opt).prop("checked", true); 
    }
}

$("#btn-confirm-question").click(function(){
    
    $("#modal-question").hide();
    modal_active = false;
    var quest_value = $("input[name='inp_quest']:checked").val();
    if(quest_value != undefined)
        sendQuestion(user,actual_quest, quest_value, function(){
            questions_json[actual_quest-1].opt = quest_value;
            freeNextQuestion();
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
    console.log(questions_json[actual_quest-1])
    $("#text-question").html(questions_json[actual_quest-1].quest);
    
    console.log( $("#text-alt-1 .ui-checkboxradio-icon-space") );

    $("#text-alt-1 .ui-checkboxradio-icon-space").html(questions_json[actual_quest-1].alt[0]);
    $("#text-alt-2 .ui-checkboxradio-icon-space").html(questions_json[actual_quest-1].alt[1]);
    $("#text-alt-3 .ui-checkboxradio-icon-space").html(questions_json[actual_quest-1].alt[2]);
    
    $("#text-alt-1").removeClass("ui-checkboxradio-checked ui-state-active");
    $("#text-alt-2").removeClass("ui-checkboxradio-checked ui-state-active");
    $("#text-alt-3").removeClass("ui-checkboxradio-checked ui-state-active");

};

function activenav(){
    $(".btn-nav-img").removeClass('active');
    $(".btn-nav-img[ref='"+actual_quest+"']").addClass('active')
}


fetch('data/questions.json')
    .then((response) => response.json())
    .then((json) => function(){
        questions_json = json;
        atQuestion();
    }() )

$(window).on("orientationchange", function( event ) {
   //alert("ok")
    orientationcheck();
    event.preventDefault();
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

function nextQuestion(){
    if(modal_active)
        return;
    if(next_freequestion <= actual_quest){
        $("#view-question").addClass("view-question-error");
        return;
    }
       

    if(actual_quest < 10){
        actual_quest++;
        $("#load-image").show();
        $("#main-image").attr("src", "images/imagem"+actual_quest+".png");
        update_question();
        activenav();

    }else{
        $("#main-container-questions").addClass("hidden");
        $("#container-back").removeClass("hidden");
    }
}


function priorQuestion(){
    if(modal_active)
        return;

    if(actual_quest > 1)
        actual_quest--;
    $("#load-image").show();
    $("#main-image").attr("src", "images/imagem"+actual_quest+".png");
    update_question();
    activenav();
}

function freeNextQuestion(){
    next_freequestion++;
}

function atQuestion(){
    if(modal_active)
        return;
    
    if(next_freequestion <= actual_quest){
        $("#view-question").addClass("view-question-error");
        return;
    }

    $("#load-image").show();
    $("#main-image").attr("src", "images/imagem"+actual_quest+".png");
    console.log(actual_quest)
    update_question();
    activenav();
}

function redirectToList(){
    window.location = "list.html";
}

getPatientSession( function(){}, redirectToList);
