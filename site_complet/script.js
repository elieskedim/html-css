$("#filtre li a").click(function () {

    $("#filtre li a").removeClass("activ");
    $(this).addClass("activ");
    window.location.href = $(this).attr('href');
    return false;
});