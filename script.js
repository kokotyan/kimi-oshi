$(document).ready(function () {
  var $menu = $("#global_nav");
  var $openBtn = $(".openbtn");
  var $document = $(document);

  $openBtn.click(function (e) {
      e.stopPropagation();
      console.log("openBtn clicked");
      $openBtn.toggleClass("active");
      $menu.slideToggle(550, function () {
      });
  });

  // メニューのリンクがクリックされたときにメニューを閉じる
  $menu.find('a').click(function () {
      $openBtn.removeClass("active");
      $menu.slideUp(300);
  });

  $document.click(function (e) {
      console.log("document clicked");
      if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
          $openBtn.removeClass("active");
          $menu.slideUp(300);
      }
  });

  // ウィンドウがリサイズされたときにハンバーガーメニューを非表示にする
  $(window).resize(function () {
      if ($(window).width() > 768) {
          $openBtn.removeClass("active");
          $menu.hide();
      }
  });
});
