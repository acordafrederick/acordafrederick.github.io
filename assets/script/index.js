$("#about, #work, #contact, .home").hide();
$("nav, .logo, .what-i-do, .hire-me").hide();
$(document).ready(function(){

    $(window).scroll(function(){
        const scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("nav").addClass("nav-scroll");
        }
        else {
            $("nav").removeClass("nav-scroll");
        }
    });

    // $("nav").delay(500).fadeIn();
    $(".logo").delay(500).fadeIn();
    $(".what-i-do").delay(2000).fadeIn();
    $("nav, .hire-me").delay(3500).fadeIn();

    $(".about").click(function() {
        $(this).addClass("active");
        $(".work, .contact").removeClass("active");
        $(".home, #about").fadeIn("swing").show();
        $("#landing-page, #work, #contact").fadeOut("swing").hide();
    });

    $(".work").click(function() {
        $(this).addClass("active");
        $(".about, .contact").removeClass("active");
        $("#work, .home").fadeIn("swing").show();
        $("#landing-page, #about, #contact").fadeOut("swing").hide();
    });

    $(".contact, .hire-me").click(function() {
        $(this).addClass("active");
        $(".about, .work").removeClass("active");
        $("#contact, .home").fadeIn("swing").show();
        $("#landing-page, #about, #work").fadeOut("swing").hide();
    });

    $(".home").click(function() {
        $(".about, .work, .contact").removeClass("active");
        $(".logo, .what-i-do, .hire-me, #landing-page").fadeIn("swing").show();
        $(".home, #about, #work, #contact").fadeOut("swing").hide();
    });

    $(".fa-linkedin").hover(function() {
        $(".link-names").text("LinkedIn");
    })

    $(".fa-github-square").hover(function() {
        $(".link-names").text("GitHub");
    });

    $(".fa-envelope-square").hover(function() {
        $(".link-names").text("sonjaire@gmail.com");
    });

    // $(".contact").click(function() {
    //     $('html, body').animate({
    //         scrollTop: $("#about").offset().top
    //     }, 300);
    // });
});    // .ready()

