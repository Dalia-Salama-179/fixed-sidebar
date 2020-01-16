$(window).on('load', function () {
    let $scrolledCol = $('.d-scrolled-col'),
        scrolledColHeight = $scrolledCol.outerHeight(),
        offsetTop = $scrolledCol.offset().top,
        windowScrollTop,
        windowHeight = $(window).height(),
        scrolledOffsetBottom = (offsetTop + scrolledColHeight) - windowHeight

    $('.d-fixed-col').map(function (index, el) {
        let $fixedCol = $(el),
            fixedColHeight = $fixedCol.outerHeight(),
            fixedColWidth = $fixedCol.outerWidth(),
            fixedOffsetBottom = (offsetTop + fixedColHeight) - windowHeight
        if (scrolledColHeight > fixedColHeight) {
            $fixedCol.css('width', fixedColWidth)
            $(window).scroll(function () {
                windowScrollTop = $(window).scrollTop();
                // If the sidebar height is less than content height
                if (fixedColHeight - offsetTop < windowHeight) {
                    if (windowScrollTop >= offsetTop) {
                        $fixedCol.addClass('fixed-on-scroll')
                        $fixedCol.removeClass('absolute-bottom')
                    } else {
                        $fixedCol.removeClass('fixed-on-scroll')
                    }

                    // If we reach end of column
                    if (windowScrollTop >= scrolledOffsetBottom - (fixedColHeight - windowHeight)) {
                        $fixedCol.removeClass('fixed-on-scroll')
                        $fixedCol.addClass('absolute-bottom')
                    }
                } else {
                    if (fixedOffsetBottom < windowScrollTop) {
                        $fixedCol.addClass('fixed-bottom')
                        $fixedCol.removeClass('absolute-bottom')
                        if (windowScrollTop > scrolledOffsetBottom) {
                            $fixedCol.removeClass('fixed-bottom')
                            $fixedCol.addClass('absolute-bottom')
                        }
                    } else {
                        $fixedCol.removeClass('fixed-bottom')
                        $fixedCol.removeClass('absolute-bottom')
                    }
                }
            })
        }
    })
});