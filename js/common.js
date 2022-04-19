$(function () {
  let didscroll;
  let lastScrollTop = 0;
  const delta = 20;
  const header_height = $(".header").outerHeight();
  const sec01_height = $(".sec01").innerHeight();

  setInterval(function () {
    if (didscroll) {
      scroll_headerEvent();
      didscroll = false;
    }
  }, 500);

  $(window).on("scroll", function () {
    didscroll = true;
  });
  function scroll_headerEvent() {
    const scrollTop = $(this).scrollTop();

    console.log(Math.abs(lastScrollTop - scrollTop));
    if (Math.abs(lastScrollTop - scrollTop) <= delta) {
      return;
    }
    if (scrollTop > lastScrollTop && scrollTop > sec01_height - header_height) {
      $(".header").addClass("sticky");
    } else {
      if (scrollTop + $(window).innerHeight() < $(document).innerHeight()) {
        $(".header").removeClass("sticky");
      }
    }

    lastScrollTop = scrollTop;
  }

  $(".web_wrap").slick({
    dots: false,
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    initialSlide: 1,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
