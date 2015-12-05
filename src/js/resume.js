$(document).ready(function(){

    $('.age').text(calculateMyAge());

    /* Skills highlight on mouseenter/mouseexit */
    $('.skill').on('mouseenter', function() {
        $(this).css("background", "rgba(255, 255, 255, 0.4)");
    });

    $('.skill').on('mouseleave', function() {
        $(this).css("background", "none");
    });

    /* Smooth scroll for navbar */
    $('nav a[href*=#]').on('click', function(e)
    {
        e.preventDefault();

        if( $( $.attr(this, 'href') ).length > 0 ) {
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 50
            }, 200);
        }
        return false;
    });

    /* Project Carousel Configurations */
    var projectWidth =$(window).width() * .6;
    $('.project').width(projectWidth);
    $('.jcarousel').width(projectWidth);
    $('.jcarousel>ul').width(projectWidth * 2);

    $('.jcarousel-pagination').children().html('');

    $('.jcarousel')
        .jcarousel({
            wrap: 'circular'
        })
        .jcarouselAutoscroll({
            interval: 5000,
            target: '+=1',
            autostart: true
        }) ;

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination({
            perPage: 1,
            item: function(page) {
                return '<a href="#' + page + '"></a>';
            }
        });

});


function calculateMyAge()
{
    var birthday = new Date(1991, 7, 2, null, null, null, null);
    var today = new Date();

    var age = today.getFullYear() - birthday.getFullYear();

    var monthDif = today.getMonth() - birthday.getMonth();
    if ( monthDif < 0 ||  (monthDif === 0 && (today.getDate() < birthday.getDate())) )
    {
        age--;
    }
    return age;
}