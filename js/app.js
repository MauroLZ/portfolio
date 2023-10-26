$(document).ready(function() {
    $(".mobile-menu-button").click(function() {
        $(".mobile-menu").toggleClass("active");
    });

    $(".close-button").click(function() {
        $(".mobile-menu").removeClass("active");
    });
});