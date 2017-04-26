/********
* Cambio de Imagen
/********/
// Change image on thumbnail click.
var thumbs = $('.image-navi').find('img');
thumbs.click(function () {
    var src = $(this).attr('src');
    console.log(src)
    var dp = $('.image-main').find('img');
    dp.attr("src", src);
});


function popupOpenClose(popup) {

    /* Add div inside popup for layout if one doesn't exist */
    if ($(".wrapper").length == 0) {
        $(popup).wrapInner("<div class='wrapper'></div>");
    }

    /* Open popup */
    $(popup).show();

    /* Close popup if user clicks on background */
    $(popup).click(function (e) {
        if (e.target == this) {
            if ($(popup).is(':visible')) {
                $(popup).hide();
            }
        }
    });

    /* Close popup and remove errors if user clicks on cancel or close buttons */
    $(popup).find("button[name=close]").on("click", function () {
        if ($(".formElementError").is(':visible')) {
            $(".formElementError").remove();
        }
        $(popup).hide();
    });
}

$(document).ready(function () {
    $("[data-js=open]").on("click", function () {
        popupOpenClose($(".popup"));
    });
});

