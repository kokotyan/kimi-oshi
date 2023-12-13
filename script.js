$(document).ready(function () {
    var $menu = $("#global_nav");
    var $openBtn = $(".openbtn");

    $openBtn.click(function (e) {
        e.stopPropagation();
        console.log("openBtn clicked");
        $openBtn.toggleClass('active');
        $menu.slideToggle(300);
    });

    $menu.click(function (e) {
        e.stopPropagation();
        console.log("menu clicked");
    });

    $(document).click(function (e) {
        console.log("document clicked");
        if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
            $openBtn.removeClass('active');
            $menu.slideUp(300);
        }
    });
});