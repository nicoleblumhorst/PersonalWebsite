$(document).ready(function(){

    $('.skill').on('mouseenter', function() {
    	$(this).css("background", "rgba(255, 255, 255, 0.4)");
    });

    $('.skill').on('mouseleave', function() {
        $(this).css("background", "none");
    });

    $('a[href*=#]').on('click', function(e)
    {
        e.preventDefault();

        if( $( $.attr(this, 'href') ).length > 0 ) {
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 50
            }, 200);
        }
        return false;
    });
});
