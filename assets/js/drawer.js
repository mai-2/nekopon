"use strict";

// ハンバーガーメニュー
if ($(window).width() < 768) {
  $('.drawer-icon').on('click', function () {
    $('.drawer-icon').toggleClass('is-active');
    $('.nav-wrapper').fadeToggle(500);
    $('body').toggleClass('noscroll');
  });
  $('.header-nav__list a[href]').on('click', function (e) {
    $('.drawer-icon').trigger('click');
  });
}

;