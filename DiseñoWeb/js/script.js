// Change image on thumbnail click.
var thumbs = $('.icon-images').find('img');
thumbs.click(function () {
    var src = $(this).attr('src');
    var dp = $('.display-img').find('img');
    dp.attr('src', src);
});