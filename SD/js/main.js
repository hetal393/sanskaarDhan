(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

    //load content from top on every refresh
    $(document).ready(function(){
        $(this).scrollTop(0);
    });


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sticky Navbar
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    //     } else {
    //         $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
    //     }
    // });
    
    
    // // Back to top button
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 300) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    // });
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });



    

    
})(jQuery);


$('head').append('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />');
$('head').append('<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@600&family=Lobster+Two:wght@700&display=swap" rel="stylesheet" />');
$('head').append('<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />');
$('head').append('<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />');
$('head').append('<link href="lib/animate/animate.min.css" rel="stylesheet" />');
$('head').append('<link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />');
$('head').append('<link href="css/bootstrap.min.css" rel="stylesheet" />');
$('head').append('<link href="css/style.css" rel="stylesheet" />');
