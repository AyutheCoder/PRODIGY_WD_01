var swiper = new Swiper('.banner-swiper', {
  loop: true,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  speed: 600,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 0, // No space between slides for a clean look
});
