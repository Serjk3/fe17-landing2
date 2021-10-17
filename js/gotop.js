$(document).ready(function(){  
    //fade in/out based on scrollTop value
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    });
 
    // scroll body to 0px on click
    $('.gotop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});