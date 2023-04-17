"use strict";

// スティッキーヘッダー
$(function () {
  var $win = $(window),
      $change = $('.js-change'),
      $header = $('.header'),
      headerPos = $header.offset().top,
      changeHeight = $change.outerHeight(),
      fixedClass = 'fixed';
  $win.on('load scroll', function () {
    var value = $(this).scrollTop();

    if (value > headerPos) {
      $header.addClass(fixedClass);
    } else {
      $header.removeClass(fixedClass);
    }
  });
}); // クリックイベントの処理

$('.header-nav li a').on('click', function () {
  $('.header-nav li a').removeClass('is-active');
  $(this).addClass('is-active');
});