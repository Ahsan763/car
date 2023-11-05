$(Document).ready(function () {
  $(".dot").click(function (event) {
    $(this).prevAll(".dot").removeClass("active");
    $(this).addClass("active");
    $(this).nextAll(".dot").removeClass("active");
    $(".carSec__h").addClass("active");
    event.stopPropagation();
  });
  $("body").click(function () {
    $(".dot").removeClass("active");
    $(".carSec__h").removeClass("active");
  });
});
