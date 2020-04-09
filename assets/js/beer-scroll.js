var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});