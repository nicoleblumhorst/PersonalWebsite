$(document).ready(function(){
    $("header").height($(window).height() + 20);
});

$(window).resize(function(){
    $("header").height($(window).height() + 20);
});