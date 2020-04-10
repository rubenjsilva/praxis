var swiper = new Swiper('.swiper-container-news', {
  slidesPerView: 1.5,
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      spaceBetween: 60,
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  }
});