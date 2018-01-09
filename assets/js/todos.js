$("ul").on("click", "li" ,function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function (e) { 
    $(this).parent().fadeOut(300,function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input").keypress(function (e) { 
    if (e.which === 13) {
        var text;
        text = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + text + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});