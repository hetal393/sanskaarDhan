(function($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

    //load content from top on every refresh
    $(document).ready(function() {
        $(this).scrollTop(0);
    });


    // Spinner
    var spinner = function() {
        setTimeout(function() {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Sticky Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    //kind words caraousel
    function moveToSelected(element) {
        if (element == "next") {
            var selected = $(".selected").next();
        } else if (element == "prev") {
            var selected = $(".selected").prev();
        } else {
            var selected = element;
        }

        var next = $(selected).next();
        var prev = $(selected).prev();
        var prevSecond = $(prev).prev();
        var nextSecond = $(next).next();

        $(selected).removeClass().addClass("selected");

        $(prev).removeClass().addClass("prev");
        $(next).removeClass().addClass("next");

        $(nextSecond).removeClass().addClass("nextRightSecond");
        $(prevSecond).removeClass().addClass("prevLeftSecond");

        $(nextSecond).nextAll().removeClass().addClass("hideRight");
        $(prevSecond).prevAll().removeClass().addClass("hideLeft");
    }

    // Eventos teclado
    $(document).keydown(function(e) {
        switch (e.which) {
            case 37: // left
                moveToSelected("prev");
                break;

            case 39: // right
                moveToSelected("next");
                break;

            default:
                return;
        }
        e.preventDefault();
    });

    $("#carousel div").click(function() {
        moveToSelected($(this));
    });

    $("#prev").click(function() {
        moveToSelected("prev");
    });

    $("#next").click(function() {
        moveToSelected("next");
    });


    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: false,
        Toolbar: false,

        Image: {
            zoom: false,
            click: false,
            wheel: "slide",
        },
    });

})(jQuery);



function navigate(value) {
    $('.vicharan-navigation_destination').addClass('vicharan-navigation_destination_hide')
    if (value === 'agas') {
        $('vicharan-agas').toggleClass("vicharan-navigation_destination_hide");
    }
}

$('head').append('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />');
$('head').append('<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />');
$('head').append('<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@600&family=Lobster+Two:wght@700&display=swap" rel="stylesheet" />');
$('head').append('<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />');
$('head').append('<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />');
$('head').append('<link href="lib/animate/animate.min.css" rel="stylesheet" />');
$('head').append('<link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />');
$('head').append('<link href="css/bootstrap.min.css" rel="stylesheet" />');
$('head').append('<link href="css/style.css" rel="stylesheet" />');
$('head').append('<link href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css" rel="stylesheet" />');