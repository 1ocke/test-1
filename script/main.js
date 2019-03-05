$(function() {
    $('.toggles .toggles__button').click(function() {
        var getId = this.id;
        var getCurrent = $('.portfolio__posts .' + getId);

        $('.post').not(getCurrent).hide(500);
        getCurrent.show(500);
    });

    $('.showAll').click(function() {
        $('.post').show(500);
    });
})