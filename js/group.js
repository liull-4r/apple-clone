$(document).ready(function () {
  function toggleUL() {
    var screenWidth = $(window).width();
    if (screenWidth > 768) {
      $(".footer-links-wrapper h3")
        .removeClass("firstheid")
        .css("border", "none");
      $(".footer-links-wrapper ul").show();
    }
  }
  $(window).resize(function () {
    toggleUL();
  });
  function hideul() {
    var screenWidth = $(window).width();
    if (screenWidth <= 768) {
      $(".footer-links-wrapper ul").hide();
    }
  }
  $(window).resize(function () {
    hideul();
  });
  $(".footer-links-wrapper h3").click(function () {
    if ($(window).width() <= 768) {
      var $ul = $(this).next();
      $ul.slideToggle();
      $(".footer-links-wrapper h3").not(this).css("border", "none");
      $(this).css("border", "3px solid blue");
      $(this).toggleClass("firstheid");
      // if (!$ul.is(":visible")) {
      //   $(this).removeClass("firstheid");
      // } else {
      //   $(this).addClass("firstheid");
      // }
    }
  });
});
