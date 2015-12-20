$(document).ready(function(){
    var windowHeight = $(window).height();
    $("header").height(windowHeight + 20);

    var margin = windowHeight / 4;
    $(".content").css('padding-top', margin +'px');
});

$(window).resize(function(){
    var windowHeight = $(window).height();
    $("header").height(windowHeight + 20);

    var margin = windowHeight / 4;
    $(".content").css('padding-top', margin +'px');
});