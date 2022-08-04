/*
Reference: https://bootsnipp.com/snippets/featured/link-to-top-page
*/
$(function() {
  $(window).scroll(() => {
//    if ($(this).scrollTop() > 100 &&
//      $("#sidebar-trigger").css("display") === "none") {
    if ($(this).scrollTop() > 100 {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });

  $("#back-to-top").click(() => {
    $("body,html").animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});
