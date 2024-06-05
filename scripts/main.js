$("#bt-start").click(function(){
 window.location = "view.html";
});

actual_image = 1;
modal_active = false;
questions_json = null;

$("#btn-next").click(function(){
    if(modal_active)
        return

    if(actual_image < 10)
        actual_image++;
 $("#main-image").attr("src", "images/imagem"+actual_image+".png");
 update_question()
});

$("#btn-back").click(function(){
    if(modal_active)
        return;

    if(actual_image > 1)
        actual_image--;

    $("#main-image").attr("src", "images/imagem"+actual_image+".png");
    update_question();
});

$("#view-question").click(function(){
  
    if(!modal_active){
        $("#modal-question").show();
        modal_active = true;
    }
});

$("#btn-confirm-question").click(function(){
    
    $("#modal-question").hide();
    modal_active = false;
    
});

function update_question(){
    $("#text-question").html(questions_json[actual_image-1].quest);
    $("#text-alt-1").html(questions_json[actual_image-1].alt[0]);
    $("#text-alt-2").html(questions_json[actual_image-1].alt[1]);
    $("#text-alt-3").html(questions_json[actual_image-1].alt[2]);
};

fetch('data/questions.json')
    .then((response) => response.json())
    .then((json) => function(){
        questions_json = json;
        update_question();
    }() )