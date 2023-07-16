(function () {
    AOS.init({
        once: true,
        duration: 2000,
    });
})();
(function () {
    const nav_toggler = $(".nav_toggler"),
        nav_wrap = $(".nav_wrap"),
        html = $("html"),
        to_top = $(".to_top");

    to_top.on("click", function () {
        html.animate(
            {
                scrollTop: 0,
            },
            500
        );
    });

    nav_toggler.on("click", function () {
        const _ = $(this);
        if (_.hasClass("open")) {
            // -- ▷ close ◁ -- //
            _.removeClass("open");
            nav_wrap.removeClass("open");
            html.css({
                overflow: "",
            });
        } else {
            // -- ▷ open ◁ -- //
            _.addClass("open");
            nav_wrap.addClass("open");
            html.css({
                overflow: "hidden",
            });
        }
    });

    $(window).on("load scroll", function () {
        const { scrollY } = window;
        if (scrollY < 100) {
            to_top.removeClass("shown");
        } else {
            to_top.addClass("shown");
        }
    });
})();
