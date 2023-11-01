var swiper = new Swiper(".bannersl", {
    pagination: {
      el: ".bannerslpagi",
      clickable: true,
    },
});
$(document).ready(function () {
    $(".aboutrow__btn").click(function () {
        $(this).toggleClass("active");
        $(".aboutrow__p").toggleClass("hidden");
    });
    $(".aboutrow__btn2").click(function () {
        $(this).toggleClass("active");
        $(".ttdiwbox2").toggleClass("active");
    });
});