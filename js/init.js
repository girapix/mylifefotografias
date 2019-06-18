$(function () {
    $('.sidenav').sidenav({
        edge: 'left',
        closeOnClick: true,
        draggable: true
    });

    $('scrollspy').scrollSpy({
        scrollOffset: 100
    });

    $('.materialboxed').materialbox();

    $('.sidenav li').click(() => {
        $('.sidenav').sidenav('close');
    });

    $(window).on('scroll', function() {
        if($(window).scrollTop() > 100) {
            $('.navbar').addClass('nav-color');
        } else {
            $('.navbar').removeClass('nav-color');
        }
    });
});