// @codekit-prepend "vendor/jquery-2.2.2.js"

$(document).ready(function () {


    $("body > header").on("click", "#burger", function (event) {
        event.preventDefault();
        $("body > header div[class^='menu-menu']").toggleClass("show");
        $("body > header #burger").toggleClass("open");
    });


    ratio();


    $(window).resize(function () {

        ratio();
    });


});


function ratio() {
    var h = $(window).height();
    var w = $(window).width();

    var ratio = w / h;

    if (ratio >= 3) {

        ratio = 3;

    } else if (ratio >= 1.5 && ratio <= 2) {

        ratio = 1.5;

    } else if (ratio >= 1) {

        ratio = Math.round(ratio);

    } else {

        ratio = Math.round(ratio * 10) / 10;

        if (ratio < 0.5) {
            ratio = 0.5;
        }

    }

    $("body").attr("data-ratio", ratio);
}
