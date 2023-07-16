const HTMLAnimate = (target) => {
    const html = $("html");
    const target_top = $(target).offset().top;
    const offset = +$(target).attr("data-offset-top") || -1;
    const md_offset = +$(target).attr("data-md-offset-top") || -1;
    const { scrollY: current_y, innerWidth: current_width } = window;
    const time_min = 300;
    const time_max = 1000;

    let _top = target_top;
    if (offset != -1) {
        _top = target_top - offset;
    }
    if (current_width > 768 && md_offset != -1) {
        _top = target_top - md_offset;
    }

    let _time_stamp = Math.abs(_top - current_y) * 0.5;
    _time_stamp < time_min && (_time_stamp = time_min);
    _time_stamp > time_max && (_time_stamp = time_max);

    html.addClass("overflow_auto");
    html.animate(
        {
            scrollTop: _top,
        },
        _time_stamp,
        function () {
            html.removeClass("overflow_auto");
        }
    );
};
