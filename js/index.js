$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")],
        responsive:{
            0:{
                items:1,
            },
            320:{
                items:1,
                nav:true
            },
            560:{
                items:2,
                nav:false
            },
            960:{
                items:3,
                nav:true,
                loop:false
            }
        }

    });

    $(".move-up").click(function (){
        $('html, body').animate({
            scrollTop:0
        }, 2000);
    });

    AOS.init();



})