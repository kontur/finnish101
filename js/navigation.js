// We define a function that takes one parameter named $.
(function ($) {
    // Use jQuery with the shortcut:
    console.log($.browser);

    $("#menu-bar").live("click", function () {
        $("#main-menu").toggleClass("open");
    });

// Here we immediately call the function with jQuery as the parameter.
}(jQuery));