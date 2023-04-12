gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

// Animate From
$(".section_home-works").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".works-item:nth-child(1)");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "360px top",
      scrub: 1
    }
  });
  tl.from(targetElement, {
    z: "-15vw",
    opacity: "0",
    duration: 1
  });
});

// Animate From
$(".section_home-works").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".works-item:nth-child(2)");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "-8% top",
      end: "430px top",
      scrub: 1
    }
  });
  tl.from(targetElement, {
    z: "-15vw",
    opacity: "0",
    duration: 1
  });
});

// Animate From
$(".section_home-works").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".works-item:nth-child(3)");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "-15% top",
      end: "380px top",
      scrub: 1
    }
  });
  tl.from(targetElement, {
    z: "-25vw",
    opacity: "0",
    duration: 1
  });
});

// Animate From
$(".section_home-works").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".works-item:nth-child(4)");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "5% top",
      end: "25% top",
      scrub: 1
    }
  });
  tl.from(targetElement, {
    z: "-25vw",
    opacity: "0",
    duration: 1
  });
});

// Animate From
$(".section_home-works").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".works-item:nth-child(5)");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "7% top",
      end: "30% top",
      scrub: 1
    }
  });
  tl.from(targetElement, {
    z: "-10vw",
    opacity: "0",
    duration: 1
  });
});

// Animate From
$(".section_home-works").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".works-item:nth-child(6)");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "3% top",
      end: "40% top",
      scrub: 1
    }
  });
  tl.from(targetElement, {
    z: "-20vw",
    opacity: "0",
    duration: 1
  });
});

// Animate From
$(".section_home-works").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".works-item:nth-child(7)");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "17% top",
      end: "48% top",
      scrub: 1
    }
  });
  tl.from(targetElement, {
    z: "-10vw",
    opacity: "0",
    duration: 1
  });
});

// Animate From
$(".section_home-works").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".works-item:nth-child(8)");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "20% top",
      end: "53% top",
      scrub: 1
    }
  });
  tl.from(targetElement, {
    z: "-15vw",
    opacity: "0",
    duration: 1
  });
});

// Animate From
$(".section_home-works").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".works-item:nth-child(9)");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "23% top",
      end: "55% top",
      scrub: 1
    }
  });
  tl.from(targetElement, {
    z: "-20vw",
    opacity: "0",
    duration: 1
  });
});

$(".section_home-works").mousemove(function (e) {
  parallaxIt(e, ".works-item:nth-child(1)", -480);
  parallaxIt(e, ".works-item:nth-child(2)", -290);
  parallaxIt(e, ".works-item:nth-child(3)", -220);
  parallaxIt(e, ".works-item:nth-child(4)", -230);
  parallaxIt(e, ".works-item:nth-child(5)", -340);
  parallaxIt(e, ".works-item:nth-child(6)", -430);
  parallaxIt(e, ".works-item:nth-child(7)", -220);
  parallaxIt(e, ".works-item:nth-child(8)", -230);
  parallaxIt(e, ".works-item:nth-child(9)", -230);
});

function parallaxIt(e, target, movement) {
  var $this = $(".section_home-works");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: ((relX - $this.width() / 2) / $this.width()) * movement,
    y: ((relY - $this.height() / 2) / $this.height()) * movement
  });
}

function numberWithZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

$(".slider-main_component").each(function (index) {
  let totalSlides = numberWithZero(
    $(this).find(".swiper-slide.is-slider-main").length
  );
  $(".swiper-number-total").text(totalSlides);

  const textSwiper = new Swiper($(this).find(".swiper.is-slider-main")[0], {
    slidesPerView: "auto",
    speed: 600,
    loop: true,
    loopedSlides: 8,
    slideToClickedSlide: true,
    mousewheel: false,
    keyboard: true,
    centeredSlides: true,
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active",

    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0]
    }
  });

  textSwiper.on("slideChange", function (e) {
    let slideNumber = numberWithZero(e.realIndex + 1);
    $(".swiper-number-current").text(slideNumber);
  });
});

function rafCallback(callback) {
  let wait;

  return function (...args) {
    if (wait) return;
    wait = true;

    requestAnimationFrame(() => {
      wait = false;
      callback(...args);
    });
  };
}

$(".works-item:nth-child(1)").on("mouseenter", function () {
  $(".bg-works-item").eq(0).addClass("active");
});
$(".works-item:nth-child(1)").on("mouseleave", function () {
  $(".bg-works-item").eq(0).removeClass("active");
});
$(".works-item:nth-child(2)").on("mouseenter", function () {
  $(".bg-works-item").eq(1).addClass("active");
});
$(".works-item:nth-child(2)").on("mouseleave", function () {
  $(".bg-works-item").eq(1).removeClass("active");
});
$(".works-item:nth-child(3)").on("mouseenter", function () {
  $(".bg-works-item").eq(2).addClass("active");
});
$(".works-item:nth-child(3)").on("mouseleave", function () {
  $(".bg-works-item").eq(2).removeClass("active");
});
$(".works-item:nth-child(4)").on("mouseenter", function () {
  $(".bg-works-item").eq(3).addClass("active");
});
$(".works-item:nth-child(4)").on("mouseleave", function () {
  $(".bg-works-item").eq(3).removeClass("active");
});
$(".works-item:nth-child(5)").on("mouseenter", function () {
  $(".bg-works-item").eq(4).addClass("active");
});
$(".works-item:nth-child(5)").on("mouseleave", function () {
  $(".bg-works-item").eq(4).removeClass("active");
});
