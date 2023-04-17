"use strict";

// スムーススクロール
$('a[href^="#"]').on('click', function () {
  // #から始まるURLがクリックされた時
  // .headerクラスがついた要素の高さを取得
  var header = jQuery(".header").innerHeight(); // 移動速度を指定（ミリ秒）

  var speed = 300; // hrefで指定されたidを取得

  var id = $(this).attr("href"); // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする

  var target = $("#" == id ? "html" : id); // トップからの距離からヘッダー分の高さを引く

  var position = $(target).offset().top - header; // その分だけ移動すればヘッダーと被りません

  $("html, body").animate({
    scrollTop: position
  }, speed);
  return false;
}); // トップへ戻るボタン

$(window).on('scroll', function () {
  if (100 < $(this).scrollTop()) {
    $('.to-top').addClass('is-show');
  } else {
    $('.to-top').removeClass('is-show');
  }
});