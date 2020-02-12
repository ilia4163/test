$(document).ready(function () {
        let NavTop = $('#nav').offset().top;

        $(window).scroll(function () {
                console.log($(window).scrollTop());
                if ($(window).scrollTop() > NavTop) {
                        $('#nav').css({
                                background: 'blue',
                                borderRadius: '20px'
                        });
                } else {
                        $('#nav').css({
                                background: 'transparent'
                        });
                }
        });
});