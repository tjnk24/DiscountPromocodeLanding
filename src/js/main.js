import style from '../css/main.pcss'; // eslint-disable-line no-unused-vars

$(document).ready(function () {

    $('.js-сonditions-title').click(() => {
        const offset = $('.js-сonditions-title').offset().top - 550;

        $('#overlay').fadeIn(400);
        $('.js-сonditions').css({
            'display': 'flex',
            'top': `${offset}px`
        });
        $('.js-сonditions-content').focus();
    });

    $('#overlay, .js-сonditions, .js-сonditions-close').click((e) => {
        if(e.target.getAttribute('data-popup')) {
            e.preventDefault();
            e.stopPropagation();
            $('#overlay').fadeOut(400);
            $('.js-сonditions').css('display', 'none');
        }
    });
});
