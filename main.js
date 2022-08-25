jQuery(function () {
    var lastScrollTop = 0;

    window.addEventListener(
        "scroll",
        function () {
            var st = window.pageYOffset || document.documentElement.scrollTop;

            if (st > lastScrollTop) {
                // console.log('to DOWN');
                $("body")
                    .removeClass("scroll-up")
                    .addClass("scroll-down");
            } else {
                // console.log('to TOP');
                $("body")
                    .removeClass("scroll-down")
                    .addClass("scroll-up");
            }

            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

            if (lastScrollTop == 0) {
                $("body")
                    .addClass("scroll-top")
                    .removeClass("scroll-middle");
            } else {
                $("body")
                    .removeClass("scroll-top")
                    .addClass("scroll-middle");
            }

            if (
                window.innerHeight + window.scrollY >=
                document.body.scrollHeight
            ) {
                $("body").addClass("scroll-bottom");

                if (lastScrollTop > 0) {
                    $("body").removeClass("scroll-middle");
                }
            } else {
                $("body").removeClass("scroll-bottom");

                if (lastScrollTop > 0) {
                    $("body").addClass("scroll-middle");
                }
            }
        },
        false
    );
});
