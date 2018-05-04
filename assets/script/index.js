$(document).ready(function(){

    $("#content").hide();
    $("#intro h1").addClass("home-bg");

    $(".home").click(function() {
        $("#intro h1").css("color", "rgba(128, 128, 128, 1)").removeClass("about-bg portfolio-bg contact-bg").addClass("home-bg");
        $("#content").hide();
    })

    $(".about").click(function() {
        $("#intro h1").css("color", "rgba(128, 128, 128, 0)").removeClass("home-bg portfolio-bg contact-bg").addClass("about-bg");
        $("#content, #content #about").show();
        $("#portfolio, #contact").hide();
    });

    $(".portfolio").click(function() {
        $("#intro h1").css("color", "rgba(128, 128, 128, 0)").removeClass("home-bg about-bg contact-bg").addClass("portfolio-bg");
        $("#content, #content #portfolio").show();
        $("#about, #contact").hide();
    });

    $(".contact").click(function() {
        $("#intro h1").css("color", "rgba(128, 128, 128, 0)").removeClass("home-bg about-bg portfolio-bg").addClass("contact-bg");
        $("#content, #content #contact").show();
        $("#about, #portfolio").hide()
    })

 });    // .ready()
