$(document).ready(function(){
    $("header").height($(window).height());

    $(".overlay").hide();
});

$(".project").mouseenter(function(){
    var projectName = $(this).find("h4").text();
    $(this).find(".overlay").fadeIn("fast");
});

$(".project").mouseleave(function(){
    var projectName = $(this).find("h4").text();
    $(this).find(".overlay").fadeOut("fast");
});

$(window).resize(function(){
    $("header").height($(window).height());
});
