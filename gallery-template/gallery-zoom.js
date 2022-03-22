$(function () {
    var $cloneObj;
    $(".zoom-onClick").click(function () {
        coverToggle();

        $cloneObj = $(this).clone();
        $cloneObj.prependTo("body");

        $cloneObj.toggleClass("zoom");

        //Chỉnh kích thước tối đa của hình, để max-height/width thì sẽ không làm biến dạng hình
        //Nếu chỉnh width, height nhớ đổi đống max-height, max-width để không bị bủa
        if ($cloneObj.hasClass("section-img")) {
            $cloneObj.find('img').css({
                'max-height': '75vh',
                'max-width': '75vw'
            });
        };

        //Chỉnh về trạng thái scroll được nếu text viết trong section-desc nhiều hơn height
        if ($cloneObj.prop('scrollHeight') > $cloneObj.outerHeight(true)) {
            $cloneObj.css({ 'overflow-y': 'scroll' });
        };

        // Chỉnh thời gian cho animation 
        const ANIMATE_DURATION = "0.5s"
        $cloneObj.animate({ opacity: 1 }, ANIMATE_DURATION);

        $cloneObj.click(function () {
            coverToggle();
            $cloneObj.animate({
                opacity: 0,
            }, ANIMATE_DURATION, function () { $cloneObj.remove() });
        })
    });
});
function coverToggle() {
    // Chỉnh mức độ tối của cái cover; default là 80% (0.8)
    var op = 0.8 - $(".cover").css('opacity');

    var visiToggle = ($(".cover").css('visibility') == "visible") ? "hidden" : "visible";
    $(".cover").css({
        'visibility': visiToggle,
        'opacity': op,
    });
}