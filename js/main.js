$(window).on('load', function () {
    let $fixedCol = $('.d-fixed-col');
    let $scrolledCol = $('.d-scrolled-col');
    let fixedColHeight = $fixedCol.outerHeight();
    let fixedColWidth = $fixedCol.outerWidth();
    let scrolledColHeight = $scrolledCol.outerHeight();
    let offsetTop = $scrolledCol.offset().top;
    let windowScrollTop,
        windowHeight = $(window).height();


    if (scrolledColHeight > fixedColHeight) {
        $fixedCol.css('width', fixedColWidth)
        $(window).scroll(function () {
            windowScrollTop = $(window).scrollTop();
            if (fixedColHeight - offsetTop < windowHeight) {
                if (windowScrollTop >= offsetTop) {
                    $fixedCol.addClass('fixed-on-scroll')
                } else {
                    $fixedCol.removeClass('fixed-on-scroll')
                }
            }
        })
    }
});